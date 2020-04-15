import * as React from 'react';
import { View ,Text , StyleSheet , Platform,Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContext } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';



class Header extends React.Component {
  static contextType = NavigationContext;


  render() {
    // We can access navigation object via context
    const navigation = this.context;
    console.log(navigation)

    return (
    	<View style={styles.header}>
		      	<View style={styles.icon}>
		      		<Text onPress={() => {navigation.openDrawer();console.log(navigation)}}><Ionicons name="md-list" size={32} color="white" /></Text>
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
		padding:15,
		backgroundColor: 'black',
		display: 'flex',
		flexDirection: 'row', 
		justifyContent: 'flex-start',
		marginTop:25,
	},
	headtext : {
		color:'white',
		fontWeight:  'bold',
		fontSize:20,
		textAlign: 'center' ,
		marginLeft:10,

	},
	icon: {
	}
	
})


export default Header