import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
function Lainnya( {route, navigation} ) {
     return (
     <SafeAreaView>
          <View style={style.viewContainer}>
               <View style={style.rowContainer}>
                    <TouchableOpacity style={style.bottonStyle}>
                         <MaterialCommunityIcons name="phone" size={50} color="black" />
                         <Text style={{color : 'black', textAlign : 'center', fontWeight:'bold'}}>Cek Pemesanan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.bottonStyle}>
                         <MaterialCommunityIcons name="sail-boat" size={50} color="black" />
                         <Text style={{color : 'black', textAlign : 'center', fontWeight:'bold'}}>Detail Profile</Text>
                    </TouchableOpacity>
               </View>
               <View style={style.rowContainer}>
                    <TouchableOpacity style={style.bottonStyle}>
                         <MaterialCommunityIcons name="sail-boat" size={50} color="black" />
                         <Text style={{color : 'black', textAlign : 'center', fontWeight:'bold'}}>Hubungi Kami</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.bottonStyle}>
                         <MaterialCommunityIcons name="sail-boat" size={50} color="black" />
                         <Text style={{color : 'black', textAlign : 'center', fontWeight:'bold'}}>Riwayat Pemesanan</Text>
                    </TouchableOpacity>
               </View>
               
          </View>
     </SafeAreaView>
     )
}
const style = StyleSheet.create({
     viewContainer : {
          display: 'flex',
          justifyContent : 'center',
          alignItems : 'center',
     },
     rowContainer : {
          display: 'flex',
          flexDirection : 'row',
     },
     bottonStyle : {
          borderWidth : 2,
          borderColor : 'black',
          padding : 20,
          margin : 10,
          borderRadius : 10, 
          display : 'flex',
          alignItems : 'center'
          
     }
});
export default Lainnya
