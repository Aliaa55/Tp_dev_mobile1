import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeStack from './screens/HomeStack';
import AppBar from './screens/AppBar';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; 


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      {/* ⬇️ SafeAreaView autour de TOUTE l'app */}
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationContainer>
          {/* BARRE PERSONNALISÉE EN HAUT */}
          <AppBar />
          
          {/* NAVIGATION PAR ONGLETS EN BAS */}
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { 
                backgroundColor: '#f0f0f0'
              },
              tabBarLabelStyle: { 
                fontSize: 14
              },
            }}
          >
            <Tab.Screen 
              name="Maison" 
              component={HomeStack} 
              options={{ 
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }} 
            />
            <Tab.Screen 
              name="Paramètres" 
              component={SettingsScreen} 
              options={{ 
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" size={size} color={color} />
                ),
              }} 
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

