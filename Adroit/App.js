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
     <View style={{padding:2,}}>  
      <Image
        style={{height:150,width:100,flex:1,justifyContent: 'center',borderRadius: 30,alignItems: 'center'}}
        source={{
          uri: 'https://avatars1.githubusercontent.com/u/42336393',
        }}
      />
     </View> 
    <DrawerItem
        label="Amal Santhosh P"
        inactiveTintColor="white"
        style={{padding:10}}
      />
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
