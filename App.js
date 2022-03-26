
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screen/Home';
import Transaction from './src/screen/Transaction';

const Core = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer  >
      <Core.Navigator initialRouteName='Home' screenOptions={{headerShown : false}}>
        <Core.Screen
          name='Home' 
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (<MaterialCommuityIcons name="home" size={size} color={color} />)
          }} 
        />
        <Core.Screen 
          name='Transaction' 
          component={Transaction}
          options={{
            tabBarLabel: 'Transaction',
            tabBarIcon: ({color, size}) => (<MaterialCommuityIcons name="cash" size={size} color={color} />)
          }}  
        />
      </Core.Navigator>
    </NavigationContainer>
  )
};

export default App;
