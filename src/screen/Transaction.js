import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
function Transaction() {
  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.viewContainer}>
        <Text>Kapalz</Text>
        <Text>Kuota tersedia (10000)</Text>
        <Text>Rincian Tiket</Text>
        <View style={style.userCountType}>
             <View>
             <Text>Bakauheni</Text>
             <Text>Merak</Text>
             </View>
             <Text>Jadwal Masuk Pelabuhan</Text>
             <Text>Kamis, 17 Maret 2022</Text>
             <Text>15:30 WIB</Text>
             <Text>Layanan</Text>
             <Text>Layanan</Text>
             <View></View> 
             <Text>Dewasa x 1</Text>
             <Text>Rp. 65.000,00</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = new StyleSheet.create({
  screenContainer: {
    display: 'flex',
    justifyContent : 'center'
  },
  inputText: {},
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    backgroundColor: 'rgba(255,255,255,255)',
    width: 'auto',
    height: 'auto',
    borderRadius: 5,
    shadowOpacity: 5,
    shadowRadius: {
      width: 3,
      height: 3,
    },
  },
  userCountType: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'grey',
  },
  submitButton: {
    backgroundColor: 'orange',
    shadowOpacity: 5,
    shadowRadius: {
      width: 3,
      height: 3,
    },
    borderRadius: 5,
  },
});

export default Transaction;
