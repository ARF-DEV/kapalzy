import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  Input,
} from 'react-native';
function Home() {
  return (
    <SafeAreaView>
      <View style={style.viewContainer}>
        <Text>Kapalz</Text>
        <View>
          <Input placeholder="Pilih Pelabuhan awal" />
        </View>
        <View>
          <Input placeholder="Pilih Pelabuhan tujuan" />
        </View>
        <View>
          <Input placeholder="Pilih Layanan" />
        </View>
        <View>
          <Input placeholder="Pilih Tanggal Masuk" />
        </View>
        <View>
          <Input placeholder="Pilih Jam Masuk" />
        </View>
        <View style={style.userCountType}>
          <Text>Dewasa</Text>
          <Text>1</Text>
        </View>
        <View>
          <Button style={style.submitButton} title="Buat Tiket" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = new StyleSheet.create({
  inputText: {},
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    backgroundColor: 'rgba(255,255,255,255)',
    width: 50,
    height: 90,
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

export default Home;
