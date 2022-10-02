import React from 'react';
import { registerRootComponent } from 'expo';
import Provider from './context/MyProvider';

// Navegation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import Home from './pages/Home';
import Status from './pages/Status'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ Home } options={{ tabBarStyle: { display: 'none' }}} />
          <Stack.Screen name="Status" component={ Status } options={{ tabBarStyle: { display: 'none' }}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default registerRootComponent(App);