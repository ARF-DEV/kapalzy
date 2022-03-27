
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommuintyIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screen/Home';
import Transaction from './src/screen/Transaction';
import DaftarPesanan from './src/screen/DaftarPesanan';
import DetailPemesanan from './src/screen/DetailPemesanan';
import Pembatalan from './src/screen/Pembatalan';
import Lainnya from './src/screen/Lainnya';

const Core = createBottomTabNavigator();
const Main = createNativeStackNavigator();
const Sub = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer  >
      <Main.Navigator initialRouteName="Core" headerMode="none">
        <Main.Screen name="Core" component={CoreStack} options={{headerShown : false}} />
        <Main.Screen name="Sub" component={SubStack} />
      </Main.Navigator>
    </NavigationContainer>
  )
};
function SubStack() {
  return(
    <Sub.Navigator initialRouteName='Detail Pemesanan'>
      <Sub.Screen name="Detail Pemesanan" component={DetailPemesanan}></Sub.Screen>
      <Sub.Screen name="Trasaksi" component={Transaction}></Sub.Screen>
    </Sub.Navigator>
  )
}
function CoreStack() {
  return (
    <Core.Navigator initialRouteName='Home' screenOptions={{headerShown : false}}>
        <Core.Screen
          name='Home' 
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (<MaterialCommuintyIcons name="home" size={size} color={color} />)
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
            tabBarIcon: ({color, size}) => (<MaterialCommuintyIcons name="book" size={size} color={color} />)
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
            tabBarIcon: ({color, size}) => (<MaterialCommuintyIcons name="book-remove" size={size} color={color} />)
          }}  
        />
        <Core.Screen 
          name='Lainnya' 
          component={Lainnya}
          options={{
            tabBarLabel: 'Lainnya',
            headerShown : true,
            headerTitleAlign : 'center',
            headerTitleStyle : {
              color: 'white'
            },
            headerStyle : {
              backgroundColor : '#024D88',
            },
            tabBarIcon: ({color, size}) => (<MaterialCommuintyIcons name="book-remove" size={size} color={color} />)
          }}  
        />
      </Core.Navigator>
  )
}

export default App;
