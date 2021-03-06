import * as React from 'react';
import { Component } from 'react';
import { Button, View , Image,Text ,StyleSheet, Dimensions,ScrollView ,TextInput,TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './../components/Header';
import WS from 'react-native-websocket';
import { NavigationContext } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,DrawerItem
} from '@react-navigation/drawer';
import { Root, Popup } from 'popup-ui';
import * as SecureStore from 'expo-secure-store';
import { NativeModules } from "react-native";
import {Content } from 'native-base';




const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


export default class DeskTop extends Component {
  static contextType = NavigationContext;

  constructor(props){
    super(props);
     this.state={
      ip:'',
      defaultip:'',
    }
    this.addIp =this.addIp.bind(this);
  }

  componentDidMount() {
    SecureStore.getItemAsync('ip')
    .then(defaultip => this.setState({defaultip}) )
  }

 
  addIp() {

    var ip = this.state.ip
    var reg = new RegExp('[0-9].:')
    if (ip) {
     if(reg.test(ip)){ 
      var ws = new WebSocket("ws://"+ this.state.ip +"/"); 
      ws.onopen = () => {
        console.log('Message sent to ip' , this.state.ip) 
        ws.send('Lock')
        this.setState({defaultip:this.state.ip})
        Popup.show({
              type: 'Success',
              title: 'System is Locked',
              button: false,
              textBody: 'Congrats! Your pc is Locked',
              buttontext: 'Ok',
              callback: () => Popup.hide()
        });
        SecureStore.setItemAsync('ip',this.state.ip)
        this.textInput.clear()
      }
      ws.onerror = (e) => {
        Popup.show({
          type: 'Warning',
          title: 'IP not found',
          button: false,
          textBody: 'Enter correct IP address !.',
          buttontext: 'Ok',
          callback: () => Popup.hide() 

      });
             
      };

        }
    else {
        Popup.show({
          type: 'Warning',
          title: 'IP not found',
          button: false,
          textBody: 'Enter correct IP address !.',
          buttontext: 'Ok',
          callback: () => Popup.hide() 

      });

      }
         
    }

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
  return (
    <Root>
      <View style={styles.container}>
        <Header/>
         <ScrollView>
         <View style={styles.platform}>
            <View style={styles.components}>
           <Content>
             <Text id="Ip"> Current IP : {this.state.defaultip}</Text> 
             <View style={styles.connect}>
               <TextInput style={styles.textinput} ref={input => { this.textInput = input }} onChangeText={(ip) => {
                  this.setState({ip})}}/>
               <TouchableOpacity
                  style={styles.submit}
                  onPress={this.addIp}
                >
                  <Text style={{paddingTop:15,textAlign:'center',fontSize:17}}>Lock</Text>
                </TouchableOpacity>
              </View> 
            </Content>
            </View>
            </View>
           <View style={styles.components}>
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
     width:screen.width/1.5, borderWidth: 1 ,backgroundColor: 'white',padding:5,margin:4,borderRadius: 6,fontSize:20

  },
  submit: {
    backgroundColor: 'lightgreen',
    margin:4,
    borderColor: 'black',
    elevation:1,
    flex:1,
    borderRadius: 5,
  },

})