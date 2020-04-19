import * as React from 'react';
import { View , StyleSheet , Platform,Alert ,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContext } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import Constants from 'expo-constants';
import * as Font from 'expo-font';



class Header extends React.Component {
  static contextType = NavigationContext;


  render() {
    // We can access navigation object via context
    const navigation = this.context;

    return (
    	<View style={styles.header}>
    			<View style={styles.statusbar}></View>
		      	<View style={styles.icon}>
		      		<Text onPress={() => {navigation.openDrawer();}}><Ionicons name="md-list" size={32} color="white" /></Text>
		      	</View>
		      	<View>
					<Text style={styles.headtext}> Adroit </Text>
				</View>
			</View>
    	)
  }
}





const styles = StyleSheet.create ({

	header: {
		padding:20,
		backgroundColor: 'black',
		display: 'flex',
		flexDirection: 'row', 
		justifyContent: 'flex-start',
		marginTop:Constants.statusBarHeight
	},
	headtext : {
		color:'white',
		fontWeight:  'bold',
		fontSize:20,
		textAlign: 'center' ,
		marginLeft:10,

	},
	statusbar: {
	    height: Constants.statusBarHeight,
	    backgroundColor: "black",

	}

	
})


export default Header