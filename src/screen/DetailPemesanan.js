import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function Home( {route, navigation} ) {
     const [nama, setNama] = useState('');
     const [identitas, setIdentitas] = useState('');
     const [umur, setUmur] = useState('');
     const data = route.params;
     console.log(data)
  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.viewContainer}>
        <Text style={[style.titleStyle, {fontFamily : 'Roboto'}]}>Kapalzy</Text>
        <Text style={{fontWeight:'bold', color:'black', marginLeft:20, marginTop:15,}}>Informasi Pemesanan</Text>
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
        <View>
        <Text style={{marginLeft:20, marginVertical:10, color:'black', fontWeight:'bold'}}>Data Pemesan</Text>
        <View>
               <Text style={{marginLeft:20, color:'black'}}>Nama Lengkap</Text>
               <TextInput onChangeText={(value) => {setNama(value)}} style={style.textInputStyle} placeholder="Nama Lengkap" placeholderTextColor={'#9D9D9D'} />
        </View>
        <View>
               <Text style={{marginLeft:20, color:'black'}}>Identitas</Text>
               <TextInput onChangeText={(value) => {setIdentitas(value)}} style={style.textInputStyle} placeholder="Identitas" placeholderTextColor={'#9D9D9D'} />
        </View>
        <View>
               <Text style={{marginLeft:20, color:'black'}}>Umur</Text>
               <TextInput onChangeText={(value) => {setUmur(value)}} style={style.textInputStyle} placeholder="Umur" placeholderTextColor={'#9D9D9D'} />
        </View>
          <TouchableOpacity
               onPress={() => {navigation.navigate('Core',
               {
                    screen : 'Daftar Pesanan',
                    params : {
                         namaPengguna : nama,
                         Identitas : identitas,
                         Umur : umur,
                         ...data
                    },
               })}}
          >
               <Text style={{
                    backgroundColor:'black', 
                    borderRadius : 5,
                    textAlign :'center',
                    fontWeight : 'bold',
                    fontSize : 20, 
                    color:'white',
                    backgroundColor :'#EE9E54',
                    marginHorizontal: 20, 
                    marginVertical: 10, 
                    padding :7
               }}>Submit</Text>
          </TouchableOpacity>
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
       borderWidth : 1,
       height : 'auto',
       width : '90%',
       alignSelf : 'center',
       marginTop : 5
     },
     viewContainer : {
       width : '90%',
       display : 'flex',
       justifyContent : 'flex-start',
       alignSelf : 'center',
       flex : 1,
       backgroundColor : '#E9E9E9', 
        borderRadius : 5,
        borderWidth : 1,
        margin : 10
     },
     screenContainer : {
       display : 'flex',
       alignItems : 'center',
       height : '100%',
     //   marginVertical : 20,
          justifyContent : 'center'
   
     },
     buttonStyle : {
       backgroundColor : '#00579C',
       borderRadius : 5,
       borderWidth : 3,
       borderColor : '#00579C',
     },
     textInputStyle : {
          borderWidth : 1,
          borderColor : 'black',
          borderRadius : 5,
          padding : 3,
          marginHorizontal : 20,
          marginVertical : 3
     }
   });
   

export default Home;