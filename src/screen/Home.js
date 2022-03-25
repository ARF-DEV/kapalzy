import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
function Home() {
  const [selectedCity, setSelectedCity] = useState();
  const [hour, setHour] = useState(new Date());

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      // date: time,
      mode: 'time',
      value: hour,
      is24Hour: true,
      onChange : (hour) => {
        setHour(hour);
      }
    })
  }
  const hourFormat = (time) => {
    const selectedHour = time.toString().split(' ')[4];
    console.log(typeof(selectedHour)); 
    const timeSplit = selectedHour.split(':'); //undefiend error here
    return timeSplit[0] + ':' + timeSplit[1];
  }

  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.viewContainer}>
        <Text style={style.TextStyle}>Kapalz</Text>
        <View style = {style.inputContainer}>
          <TextInput placeholder="Pilih Pelabuhan awal" />
        </View>
        <View style = {style.inputContainer}>
          <TextInput placeholder="Pilih Pelabuhan tujuan" />
        </View>
        <View style = {style.inputContainer}>
          <TextInput placeholder="Pilih Layanan" />
        </View>
        <View style = {style.inputContainer}>
          <Picker 
            selectedValue={selectedCity}
            onValueChange={(itemValue) => setSelectedCity(itemValue)}
            >
            <Picker.Item label="Bandung" value="bdg" />
            <Picker.Item label="Palembang" value="plm" />
            <Picker.Item label="Jakarta" value="jkr" />
            <Picker.Item label="Lampung" value="lmp" />
            <Picker.Item label="Bogor" value="bgr" />
          </Picker>
        </View>
        <View style = {style.inputContainer}>
        <Button onPress={showDatepicker} title={`${hourFormat(hour)}`} />
        </View>
        <View style={style.userCountType}>
          <Text>Dewasa</Text>
          <Text>1</Text>
        </View>
        <View style = {style.inputContainer}>
          <Button style={style.submitButton} title="Buat Tiket" />
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,255)',
    width: '80%',
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius : 5,
    margin : '5%',
    padding : 10
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
  TextStyle : {
    color : 'black',
    fontSize : 40,
    fontWeight : 'bold',
    textAlign : 'center',
    paddingVertical : 25
  },
  inputContainer: {
    margin : 10,
    marginHorizontal : 20,
    borderRadius : 5,
    backgroundColor : 'rgba(120, 120, 120, 0.5)',
    height : 'auto',
    width : 'auto',
    borderColor : 'grey',
    borderWidth : 1,
  }
});

export default Home;
