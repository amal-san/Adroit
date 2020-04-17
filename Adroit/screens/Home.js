import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View ,Text ,Dimensions ,SafeAreaView, ScrollView,Alert,TextInput } from 'react-native';
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
import WS from 'react-native-websocket';
import TextField from '@material-ui/core/TextField';
import { Root, Popup } from 'popup-ui'



const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


class Home extends React.Component {
  static contextType = NavigationContext;



  constructor(props){
    super(props);
    this.state={
      id:'',
      submit:false,
    }
    this.addIp =this.addIp.bind(this);
  }


  addIp() {

    if (this.state.id) {
    var ws = new WebSocket("ws://"+ this.state.id +"/");
    ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('Message sent to ip' , this.state.id)
        ws.send('Lock')
        this.setState({submit:true});
        Popup.show({
          type: 'Success',
          title: 'System is Locked',
          button: false,
          textBody: 'Congrats! Your pc is Locked',
          buttontext: 'Ok',
          callback: () => Popup.hide()
        })
    }
     Popup.show({
          type: 'Warning',
          title: 'IP not found',
          button: false,
          textBody: 'Enter correct IP address !.',
          buttontext: 'Ok',
          callback: () => Popup.hide()
    })}
    else { 
      Popup.show({
          type: 'Danger',
          title: 'Please fill the field',
          button: false,
          textBody: 'Enter IP address !.',
          buttontext: 'Ok',
          callback: () => Popup.hide()
      });
     }

    
    


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
           <View style={styles.components}/>
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
    backgroundColor: '#fff',
    display: 'flex',

  },
  platform: {
    flex:1,
    backgroundColor: 'white',
    height:screen.height-150,
    justifyContent: 'space-around', 


  },
  components: {
    height: 100,
    backgroundColor: 'white',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    padding:5,
    borderRadius: 10,
    justifyContent: 'flex-end',

  },
  button : {
    padding:10,
    flex:1,
    margin:10,
  },
  connect : {
    backgroundColor: 'white',
    height:55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between' ,
  },
  textinput: {
     width:screen.width/1.5, borderColor: 'gray', borderWidth: 1 ,backgroundColor: 'white',padding:5,margin:4,

  },
  submit: {
    backgroundColor: 'wheat',
    margin:4,
    borderColor: 'black',
    elevation:1,
    flex:1,
  }
});

export default Home