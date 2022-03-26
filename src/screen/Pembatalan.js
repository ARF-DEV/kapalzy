import React from 'react'
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native'

function Pembatalan() {
     return (
          <SafeAreaView>
               <View style={style.viewContainer}>
                    <Image 
                    source={require('../../assets/Brendan.jpg')} 
                    style={{width : 300, height : 300, borderRadius : 10}}/>
                         <Text 
                         style={{
                              color : 'black',
                              fontWeight : 'bold',
                              fontSize : 18,
                              marginTop : 10,
                         }}>
                         Tidak Ada Aktivitas Pembatalan Tiket
                         </Text>
               </View>
          </SafeAreaView>
     )
}

const style = StyleSheet.create({
     viewContainer : {
          display: 'flex',
          justifyContent : 'center',
          alignItems : 'center',
          height : '100%',
          width : '100%',
     }
});
export default Pembatalan
