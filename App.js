import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import HomeStack from './screens/HomeStack';
import AppBar from './screens/AppBar';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; 
import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppDrawer from "./navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";
import { useContext } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <AppDrawer /> : <LoginScreen />;
}


function HomeTabNavigator() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <AppBar />
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
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  );
}
