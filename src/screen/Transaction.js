import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Transaction() {
  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.viewContainer}>
        <Text style={[style.titleStyle, {marginVertical : 20}]} >Kapalzy</Text>
        <Text style={{color: 'black', fontSize : 18, marginBottom : 20, }}>Kuota tersedia (10000)</Text>
        <Text style={{color: 'black', fontSize : 18, marginBottom : 20}}>Rincian Tiket</Text>
        <View style={style.transactionBox}>
          <View style={{display : 'flex', flexDirection: 'row', alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{color: 'black', fontSize : 20, marginHorizontal : 20}}>Bakauheni</Text>
            <MaterialCommunityIcons name="arrow-right-thin" size={50} color="black" />
            <Text style={{color: 'black', fontSize : 20, marginHorizontal : 20}}>Merak</Text>
          </View>
          <Text style={[style.textStyle, {fontWeight : 'bold'}]}>Jadwal Masu Pelabuhan</Text>
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
        <View style={{display : 'flex', flexDirection: 'row', alignItems : 'center', justifyContent : 'space-between', marginVertical : 20}}>
          <Text style={[style.textStyle, {fontSize : 20, marginHorizontal : 0}]}>Dewasa x 1</Text>
          <Text style={[style.textStyle, {fontSize : 20, marginHorizontal : 0}]}>Rp 65.000</Text>
        </View>
        <View style={{display : 'flex', flexDirection: 'row', alignItems : 'center', justifyContent : 'space-between'}}>
            <TouchableOpacity style={[style.buttonStyle, {backgroundColor: 'white'}]}>
              <Text style={{fontWeight:'bold', color:'#00579C', fontSize:25, marginHorizontal : 10, marginVertical : 5}}>Kembali</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonStyle}>
              <Text style={{fontWeight:'bold', color:'white', fontSize:25, marginHorizontal : 10, marginVertical : 5}}>Lanjutkan</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = new StyleSheet.create({
  titleStyle: {
    fontSize: 40,
    color : 'blue',
    fontWeight : 'bold',
    textAlign : 'center'
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
    height : 'auto',
    display : 'flex',
    justifyContent : 'flex-start',
    flex : 1
     
  },
  screenContainer : {
    display : 'flex',
    alignItems : 'center',
    height : '70%'
  },
  buttonStyle : {
    backgroundColor : '#00579C',
    borderRadius : 5,
    borderWidth : 3,
    borderColor : '#00579C',
  }
});

export default Transaction;
