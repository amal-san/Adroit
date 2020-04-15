import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import Home from './screens/Home';


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
      <Drawer.Navigator  drawerStyle={{ backgroundColor: 'black'}} drawerContentOptions={{activeTintColor: 'green',inactiveTintColor:'white',activeBackgroundColor:'#111110'}} initialRouteName="Home">
        <Drawer.Screen  style={{backgroundColor: 'black'}} name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}