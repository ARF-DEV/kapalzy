import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function Home() {
  const [selectedCity, setSelectedCity] = useState();
  const [hour, setHour] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const showHourpicker = () => {
    DateTimePickerAndroid.open({
      // date: time,
      mode: 'time',
      value: hour,
      is24Hour: true,
      onChange : (e, hour) => {
        console.log(typeof(hour))
        setHour(hour);
      }
    })
  }
  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange : (e, date) => {
        console.log(typeof(date))
        setDate(date);
      }
    })
  }
  const hourFormat = (time) => {
    const selectedHour = time.toString();
    const result = selectedHour.substring(16, 21);
    // console.log(typeof(selectedHour)); 
    return result;
  }
  const dateFormat = (time) => {
    const selectedHour = time.toString();
    const result = selectedHour.substring(4, 15);
    // console.log(typeof(selectedHour)); 
    return result;
  }

  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.viewContainer}>
        <Text style={[style.titleStyle, {fontFamily : 'Roboto'}]}>Kapalzy</Text>
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
          <MaterialCommunityIcons name="sail-boat" size={50} color="black" />
          <View style={style.inputContainer}>
            <Picker padding={5}
              selectedValue={selectedCity}
              onValueChange={(itemValue) => setSelectedCity(itemValue)}
              >
              <Picker.Item label='Pilih Pelabuhan Awal' value=""/>
              <Picker.Item label="Bandung" value="bdg" />
              <Picker.Item label="Palembang" value="plm" />
              <Picker.Item label="Jakarta" value="jkr" />
              <Picker.Item label="Lampung" value="lmp" />
              <Picker.Item label="Bogor" value="bgr" />
            </Picker>

          </View>
        </View>
        
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
          <MaterialCommunityIcons name='sail-boat' size={50} color='black'/>
          <View style={style.inputContainer}>
            <Picker padding={5}
              selectedValue={selectedCity}
              onValueChange={(itemValue) => setSelectedCity(itemValue)}
              >
              <Picker.Item label='Pilih Tujuan' value=""/>
              <Picker.Item label="Bandung" value="bdg" />
              <Picker.Item label="Palembang" value="plm" />
              <Picker.Item label="Jakarta" value="jkr" />
              <Picker.Item label="Lampung" value="lmp" />
              <Picker.Item label="Bogor" value="bgr" />
            </Picker>

          </View>

        </View>
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
        <MaterialCommunityIcons name='seat-passenger' size={50} color='black'/>
          <View style={style.inputContainer}>
            <Picker padding={5}
              selectedValue={selectedCity}
              onValueChange={(itemValue) => setSelectedCity(itemValue)}
              >
              <Picker.Item label='Pilih Layanan' value=""/>
              <Picker.Item label="Bandung" value="bdg" />
              <Picker.Item label="Palembang" value="plm" />
              <Picker.Item label="Jakarta" value="jkr" />
              <Picker.Item label="Lampung" value="lmp" />
              <Picker.Item label="Bogor" value="bgr" />
            </Picker>
          </View>

        </View>
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
          <MaterialCommunityIcons name='calendar-range' size={50} color='black'/>
          <View style={style.inputContainer}>
            <TouchableOpacity style={style.buttonStyle} onPress={showDatepicker}>
              <Text style={{fontSize:17, fontFamily: 'Roboto', color:'white'}}>{dateFormat(date.toString())}</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
          <MaterialCommunityIcons name='clock' size={50} color='black'/>
          <View style={style.inputContainer}>
              <TouchableOpacity style={style.buttonStyle}onPress={showHourpicker}>
                <Text style={{fontSize:17, fontFamily: 'Roboto', color:'white'}}>{hourFormat(hour.toString())}</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={style.userCountType}>
          <Text>Dewasa</Text>
          <Text>1</Text>
        </View>
        <View style = {style.buttonContainer}>
          <Button style={style.buttonStyle} title="Buat Tiket" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = new StyleSheet.create({
  screenContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems : 'center',
    flex : 1
  },
  viewContainer: {
    backgroundColor: 'rgba(255,255,255,255)',
    width: '90%',
    height: 'auto',
    borderRadius: 5,
    shadowOpacity: 5,
    shadowRadius: {
      width: 3,
      height: 3,
    },
    borderRadius : 10,
  },
  userCountType: {
    display: 'flex',
    alignContent : 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius : 5,
    marginHorizontal : '9%',
    marginVertical : '5%',
    padding : 10
  },
  titleStyle : {
    color : 'black',
    fontSize : 40,
    fontWeight : 'bold',
    textAlign : 'center',
    paddingVertical : 25,
    color : 'blue'
  },
  inputContainer: {
    margin : 10,
    marginHorizontal : 1,
    borderRadius : 5,
    backgroundColor : 'rgba(120, 120, 120, 0.5)',
    height : 'auto',
    width : '80%',
    borderColor : 'grey',
    borderWidth : 1,
    display : 'flex',
    alignSelf : 'center',
  },
  buttonStyle: {
    display : 'flex',
    alignContent : 'center',
    padding : 15
  },
  buttonContainer: {
    marginHorizontal : 30,
    marginVertical : 15,
  },
});

export default Home;
