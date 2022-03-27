import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Transaction( {route, navigation} ) {
  const data = route.params;
  console.log(data);

  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.viewContainer}>
          <View style={{display : 'flex', flexDirection: 'row', alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{color: 'black', fontSize : 20, marginHorizontal : 20}}>Bakauheni</Text>
            <MaterialCommunityIcons name="arrow-right-thin" size={50} color="black" />
            <Text style={{color: 'black', fontSize : 20, marginHorizontal : 20}}>Merak</Text>
          </View>
          <Text style={[style.textStyle, {fontWeight : 'bold'}]}>Jadwal Masuk Pelabuhan</Text>
          <Text style={style.textStyle}>Kamis, 17 Maret 2022</Text>
          <Text style={style.textStyle}>15:30 WIB</Text>
          <Text style={[style.textStyle, {fontWeight : 'bold'}]}>Layanan</Text>
          <Text style={style.textStyle}>Express</Text>
          <View style={{borderBottomColor : 'black', borderWidth: 1, margin : 10}}></View>
          <View style={{display : 'flex', flexDirection: 'row', alignItems : 'center', justifyContent : 'space-between', marginBottom : 15}}>
            <Text style={style.textStyle}>Dewasa x 1</Text>
            <Text style={style.textStyle}>Rp 65.000,00</Text>
          </View>
        </View>
    </SafeAreaView>
  );
}

const style = new StyleSheet.create({
  titleStyle: {
    fontSize: 40,
    color : '#00579C',
    fontWeight : 'bold',
    textAlign : 'center',
  },
  textStyle: {
    color : 'black',
    marginHorizontal: 20,
    marginBottom : 5
  },
  transactionBox: {
    backgroundColor : "rgba(220, 220, 220, 100)",
    borderRadius : 5,
    borderWidth : 1
  },
  viewContainer : {
    width : '80%',
    height : '10%',
    display : 'flex',
    justifyContent : 'flex-start',
    flex : 1,
    backgroundColor : '#E9E9E9', 
     borderRadius : 5,
     borderWidth : 1,
     margin : 10
  },
  screenContainer : {
    display : 'flex',
    alignItems : 'center',
    height : '40%',


  },
  buttonStyle : {
    backgroundColor : '#00579C',
    borderRadius : 5,
    borderWidth : 3,
    borderColor : '#00579C',
  }
});

export default Transaction;
