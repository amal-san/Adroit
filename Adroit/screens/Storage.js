import * as React from 'react';
import { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View ,Dimensions ,SafeAreaView, ScrollView,Alert,TextInput ,Text } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image, TouchableOpacity, YellowBox } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import 'react-native-gesture-handler';
import Header from './../components/Header'
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { NavigationContext } from '@react-navigation/native';
import WS from 'react-native-websocket';
import TextField from '@material-ui/core/TextField';
import { Root, Popup } from 'popup-ui'
import * as Network from 'expo-network'


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


export default class Storage extends Component {


	render(){
		return (
			 <Root>
		      <View style={styles.container}>
		        <Header/>
		         <ScrollView>
				<Text> Storage </Text> 
				</ScrollView>
			  </View>
			  </Root>

			)
	}
}