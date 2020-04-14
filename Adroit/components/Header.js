import * as React from 'react';
import { View ,Text , StyleSheet , Platform,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';




export default function Header() {
	return (
			<View style={styles.header}>
		      	<View style={styles.icon}>
		      		<Text><Ionicons name="md-list" size={32} color="white" /></Text>
		      	</View>
		      	<View>
					<Text style={styles.headtext}> Adroit </Text>
				</View>
			</View>
		)
}



const styles = StyleSheet.create ({

	header: {
		padding:15,
		backgroundColor: 'black',
		display: 'flex',
		flexDirection: 'row', 
		justifyContent: 'flex-start',
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

