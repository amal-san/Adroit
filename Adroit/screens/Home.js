import * as React from 'react';
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
import * as Network from 'expo-network';





const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


class Home extends React.Component {
  static contextType = NavigationContext;


  async handleNetwork() {
   const data = await Network.getNetworkStateAsync();
   console.log(data)
  }


  render() {
    // We can access navigation object via context
    const navigation = this.context;

    return (
    <Root>
      <View style={styles.container}>
        <Header/>
         <ScrollView>
         <View style={styles.platform}>
           <View style={styles.options}> 
            <View style={styles.optionText}> 
            <Text style={{fontSize: 20,color:'white'}}> Check the filesystems </Text> 
            </View>
             <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}><Ionicons name="md-arrow-forward" size={30} color="white" /></Text>
             </TouchableOpacity>
          </View>
           <View style={styles.options}> 
            <View style={styles.optionText}> 
            <Text style={{fontSize: 20,color:'white'}}> Send message to pc </Text> 
            </View>
             <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}><Ionicons name="md-arrow-forward" size={30} color="white" /></Text>
             </TouchableOpacity>
          </View>
          </View>
         </ScrollView>
      </View>
    </Root>




      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white'

  },
  platform: {
    flex:1,
    height: screen.height,
  },
  options : {
    height:screen.height/10,
    backgroundColor: 'wheat',
    margin:5,
    marginBottom:3,
    elevation: 2,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'flex-end'  
  },
  btn : {
    margin:15,
    backgroundColor: 'transparent',
    width:screen.width/6,
    borderRadius: 10,
    padding:10,

  },
  btnText : {
    textAlign: 'center', 

  },
  optionText: {
    flex:1,
    paddingTop:25,
    paddingLeft:25,

  }

});

export default Home