import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 

import CharactersScreen from './screens/CharactersScreen';
import LocationsScreen from './screens/LocationsScreen';
import EpisodesScreen from './screens/EpisodesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Characters') {
              iconName = 'user'; 
            } else if (route.name === 'Locations') {
              iconName = 'enviromento'; 
            } else if (route.name === 'Episodes') {
              iconName = 'videocamera'; 
            }

            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF0000',
          tabBarInactiveTintColor: 'Red',
        })}
      >
        <Tab.Screen name="Characters" component={CharactersScreen} />
        <Tab.Screen name="Locations" component={LocationsScreen} />
        <Tab.Screen name="Episodes" component={EpisodesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}