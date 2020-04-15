import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View ,Text ,Dimensions ,SafeAreaView, ScrollView } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Button } from 'react-native';
import { Image, TouchableOpacity, YellowBox } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import 'react-native-gesture-handler';
import Header from './../components/Header'
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { NavigationContext } from '@react-navigation/native';


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


class Home extends React.Component {
  static contextType = NavigationContext;

  render() {
    // We can access navigation object via context
    const navigation = this.context;
    return (

      <View style={styles.container}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  platform: {
    flex:1,
    backgroundColor: '#111110',
    paddingTop:5
  },
  components: {
    height: 100,
    backgroundColor: '#282c34',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    padding:4,
    borderRadius: 10,
  }
});

export default Home