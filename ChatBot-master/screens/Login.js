import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../Component/Logo';
import Form from '../Component/Form';
import Chat from '../screens/Chat';

export default class Login extends Component{
    
static navigationOptions = {
    //To hide the ActionBar/NavigationBar
    header: null,
};
	
	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Login" navigation={this.props.navigation}/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Forgot your password?</Text>
          <TouchableOpacity onPress={()=>
          this.props.navigation.navigate('resetPassword')} ><Text style={styles.signupButton}> Reset it</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});