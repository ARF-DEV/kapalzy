
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screen/Home';
import Transaction from './src/screen/Transaction';
import DaftarPesanan from './src/screen/DaftarPesanan';
import DetailPemesanan from './src/screen/DetailPemesanan';
import Pembatalan from './src/screen/Pembatalan';

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
          name='Transaksi' 
          component={Transaction}
          options={{
            tabBarLabel: 'Transaksi',
            tabBarIcon: ({color, size}) => (<MaterialCommuityIcons name="cash" size={size} color={color} />)
          }}  
        />
        <Core.Screen 
          name='Daftar Pesanan' 
          component={DaftarPesanan}
          options={{
            tabBarLabel: 'Daftar Pesanan',
            headerShown : true,
            headerTitleAlign : 'center',
            headerTitleStyle : {
              color: 'white'
            },
            headerStyle : {
              backgroundColor : '#024D88',
            },
            tabBarIcon: ({color, size}) => (<MaterialCommuityIcons name="book" size={size} color={color} />)
          }}  
        />
        <Core.Screen 
          name='Pembatalan' 
          component={Pembatalan}
          options={{
            tabBarLabel: 'Pembatalan',
            headerShown : true,
            headerTitleAlign : 'center',
            headerTitleStyle : {
              color: 'white'
            },
            headerStyle : {
              backgroundColor : '#024D88',
            },
            tabBarIcon: ({color, size}) => (<MaterialCommuityIcons name="book-remove" size={size} color={color} />)
          }}  
        />
      </Core.Navigator>
    </NavigationContainer>
  )
};

export default App;
