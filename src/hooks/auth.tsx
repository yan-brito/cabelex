import React, { createContext, useContext, ReactNode, useState } from 'react';
import api from '../services/api';

type User = {
  id: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {

  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const signIn = async ( email: string, password: string ) => {
      try {
          setLoading(true);

          const response = await api.post('/signin', { email, password });

          if(response.status === 200) {
            const user: User = response.data.user;

            api.defaults.headers.common['Authorization'] = user.token;

            setUser(user);

            setLoading(false);
          }
      } catch {
          setLoading(false);
          throw new Error('Não foi possível autenticar!')
      } finally {
          setLoading(false)
      }
  };
  return(
    <AuthContext.Provider value={{ user, signIn, loading }}>
        { children }
    </AuthContext.Provider>
);
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context
};

export { AuthContext, AuthProvider, useAuth };
