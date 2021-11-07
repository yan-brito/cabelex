import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Branches } from '../pages/Branches';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary
        },
        headerTitleStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 18
        },
        headerTintColor: theme.colors.shape,
        tabBarActiveTintColor: theme.colors.shape,
        tabBarInactiveTintColor: theme.colors.shape_light,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontFamily: theme.fonts.medium
        },
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: theme.colors.primary
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