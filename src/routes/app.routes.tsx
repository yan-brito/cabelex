import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Branches } from '../pages/Branches';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6f4bc2'
        },
        headerTintColor: '#FFF',
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: '#6f4bc2'
        }
      }}

    >
      <Screen
        name="Filiais"
        component={Branches}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialCommunityIcons 
              name="hair-dryer-outline" 
              size={size} 
              color={color} 
            />
          )
        }}
      />
      <Screen
        name="Funcionários"
        component={Branches}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialCommunityIcons 
              name="account-multiple" 
              size={size} 
              color={color} 
            />
          )
        }}
      />
    </Navigator>
  )
}