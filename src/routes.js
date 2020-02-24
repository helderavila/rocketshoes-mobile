/* eslint-disable react/jsx-props-no-spreading */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/Header';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            header: navigation => <Header {...navigation} />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            header: navigation => <Header {...navigation} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
