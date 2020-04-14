import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View ,Text ,Dimensions ,SafeAreaView, ScrollView } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Constants from 'expo-constants';
import { Button } from 'react-native';
import { Image, TouchableOpacity, YellowBox } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const STATUSBAR_HEIGHT = Platform.OS === 'android' ? 10 : StatusBar.currentHeight;


function App() {



  return (
     <View style={styles.container}>
        <View style={styles.statusBar} />
         <Header/>
         <ScrollView>
         <View style={styles.platform}>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
            <View style={styles.components}></View>
           </View>
         </ScrollView>
      </View>

    )
} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    backgroundColor: 'white',
    height: Constants.statusBarHeight,
  },
  platform: {
    flex:1,
    backgroundColor: '#111110',
    paddingTop:5
  },
  components: {
    height: 100,
    backgroundColor: '#282c34',
    margin:6,
    padding:4,
    borderRadius: 10,
  }
});

export default App