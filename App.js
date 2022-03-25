
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screen/Home';

const Core = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Core.Navigator>
        <Core.Screen name="Home" component={Home} />
      </Core.Navigator>
    </NavigationContainer>
    // <Core.Screen component={Home}/>
  )
};

export default App;
