import * as React from 'react';
import { Button, View , Image,Text ,StyleSheet,} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import Home from './screens/Home';
import {
  DrawerContentScrollView,
  DrawerItemList,DrawerItem
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
    <View style={{paddingTop:20}}></View>
     <View style={{flex:1,backgroundColor: 'black',justifyContent:'center',flexDirection: 'row',}}>  
      <View> 
      <Image
        style={{height:130,width:130,borderRadius: 70,}}
        source={{
          uri: 'https://avatars1.githubusercontent.com/u/42336393',
        }}
      />
      <Text style={{color:'white',paddingTop:10,marginLeft:15}}> Amal Santhosh </Text>
      </View>
     </View> 
      <DrawerItemList {...props} />
    </DrawerContentScrollView> 
  );
}



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} drawerStyle={{ backgroundColor: 'black'}} drawerContentOptions={{activeTintColor: 'green',inactiveTintColor:'white',activeBackgroundColor:'#111110'}} initialRouteName="Home">
        <Drawer.Screen  style={{backgroundColor: 'black'}} name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  sidemenuheader: {
    padding:10,
    backgroundColor: '#fff',
  },
});
