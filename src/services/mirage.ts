import { createServer, Model, Response, ActiveModelSerializer } from 'miragejs'
import { ModelInstance } from 'miragejs/-types'

type User = ModelInstance & {
  name: string;
  email: string;
  password: string;
  created_at: string;
  token: string;
};

type Branches = ModelInstance & {
  id: string;
  name: string;
};

type Employees = ModelInstance & {
  id: string;
  name: string;
  branch: string;
};

const mockModels = {
  user: Model.extend<Partial<User>>({}),
  branch: Model.extend<Partial<Branches>>({}),
  employee: Model.extend<Partial<Employees>>({}),
};

const mockFactories = {
};

export function makeServer() {

  const server = createServer<typeof mockModels, typeof mockFactories>({
    serializers: {
      application: ActiveModelSerializer
    },

    models: mockModels,

    seeds(server) {
      server.create('user', {
        name: 'Teste User', 
        email: "teste@email.com", 
        password: "123456", 
        created_at: new Date().toISOString(),
        token: 'teste'
      });

      server.create('branch', {
        name: 'Cabelex - Matriz',
        id: '1'
      });

      server.create('branch', {
        name: 'Cabelex - RJ',
        id: '2'
      });

      server.create('branch', {
        name: 'Cabelex - BH',
        id: '3'
      });

      server.create('employee', {
        name: 'Rogério Silva',
        id: '1',
        branch: '1',
        image: 'http://github.com/yan-brito.png'
      });

      server.create('employee', {
        name: 'Luciano Neves',
        id: '2',
        branch: '1',
        image: 'http://github.com/yan-brito.png'
      });

      server.create('employee', {
        name: 'Julia Santos',
        id: '3',
        branch: '2',
        image: 'http://github.com/yan-brito.png'
      });

      server.create('employee', {
        name: 'Reinaldo Silva',
        id: '4',
        branch: '2',
        image: 'http://github.com/yan-brito.png'
      });

    },

    routes() {
      this.urlPrefix = 'http://localhost:3000';

      this.namespace = '/api';

      this.post('/signin', function(schema, request){

        const body = JSON.parse(request.requestBody);

        const { email, password } = body;

        const user = schema.findBy("user", { email, password });

        if(!user){
          return new Response(401, {}, "Invalid credentials.");
        };

        const token = String(new Date().getTime());

        user.update({
          token: token
        });

        const userSerialized = this.serialize(user).user;

        const { password: passwordRemoved, ...userResponse } = userSerialized;

        return new Response(200, {}, { user: userResponse });
      });

      this.get('/branches', (schema, request) => {
        const headers = request.requestHeaders;

        const auth = schema.findBy('user', {
          token: headers.Authorization
        });
        
        if(!auth){
          return new Response(403, {}, 'Access denied');
        };

        const branches = schema.all('branch') || [];

        return new Response(200, {}, branches);
      });

      this.get('/employees', (schema, request) => {
        const headers = request.requestHeaders;

        const auth = schema.findBy('user', {
          token: headers.Authorization
        });
        
        if(!auth){
          return new Response(403, {}, 'Access denied');
        };

        const employees = schema.all('employee');

        return new Response(200, {}, employees);
      });

      this.post('/branches', (schema, request) => {
        const headers = request.requestHeaders;
        const body = JSON.parse(request.requestBody);

        const auth = schema.findBy('user', {
          token: headers.Authorization
        });
        
        if(!auth){
          return new Response(403, {}, 'Access denied');
        };

        const branches = schema.all('branch');

        const branch = schema.create('branch', {
          name: body.name,
          id: String(branches.length + 1)
        });

        return new Response(200, {}, branch);

      })

      this.post('/employees', (schema, request) => {
        const headers = request.requestHeaders;
        const body = JSON.parse(request.requestBody);

        const auth = schema.findBy('user', {
          token: headers.Authorization
        });
        
        if(!auth){
          return new Response(403, {}, 'Access denied');
        };

        const employee = schema.create('employee', {
          name: body.name,
          id: String(new Date().getTime()),
          branch: body.branch
        });

        return new Response(200, {}, employee);

      });

      this.patch('/branches/:id', (schema, request) => {
        const params = request.params;
        const body = JSON.parse(request.requestBody);
        const headers = request.requestHeaders;

        const auth = schema.findBy('user', {
          token: headers.Authorization
        });
        
        if(!auth){
          return new Response(403, {}, 'Access denied');
        };

        const branch = schema.findBy('branch', {
          id: params.id
        });

        if(branch) {
          branch.update({
            name: body.name
          });

          return new Response(200, {},  branch)
        };

        return new Response(400, {}, 'Branch not found');

      });

      this.patch('/employees/:id', (schema, request) => {
        const params = request.params;
        const body = JSON.parse(request.requestBody);
        const headers = request.requestHeaders;

        const auth = schema.findBy('user', {
          token: headers.Authorization
        });
        
        if(!auth){
          return new Response(403, {}, 'Access denied');
        };

        const employee = schema.findBy('employee', {
          id: params.id
        });

        if(employee) {
          employee.update({
            name: body.name,
            branch: body.branch
          });

          return new Response(200, {},  employee)
        };

        return new Response(400, {}, 'Employee not found');

      });

      this.del('/employees/:id', (schema, request) => {
        const params = request.params;
        const headers = request.requestHeaders;

        const auth = schema.findBy('user', {
          token: headers.Authorization
        });
        
        if(!auth){
          return new Response(403, {}, 'Access denied');
        };
        
        const employee = schema.findBy('employee', {
          id: params.id
        });

        if(employee) {
          employee.destroy();

          return new Response(200, {},  'Employee deleted')
        };

        return new Response(400, {}, 'Employee not found');

      });

      this.del('/branches/:id', (schema, request) => {
        const params = request.params;
        const headers = request.requestHeaders;

        const auth = schema.findBy('user', {
          token: headers.Authorization
        });
        
        if(!auth){
          return new Response(403, {}, 'Access denied');
        };

        const branch = schema.findBy('branch', {
          id: params.id
        });

        const hasEmployees = schema.findBy('employee', {
          branch: params.id
        });

        if(branch && !hasEmployees) {
          branch.destroy();

          return new Response(200, {},  'Branch deleted');

        } else if(branch && hasEmployees) {

          return new Response(400, {},  'This branch has employees and can not be deleted');

        } else {

          return new Response(400, {}, 'Branch not found');

        };
      
      });
      
    },
  })

  return server;
}
