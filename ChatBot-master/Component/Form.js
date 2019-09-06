import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {StackNavigator } from 'react-navigation';

export default class Form extends Component{
  constructor() {
    super();
    this.state = {
      mail : '',
      password : '',
      success : '',
      loading: false
    }
  }
    
  
    getUser(email,passwd){
    console.log(email +" and "+ passwd );
    
    fetch('http://65b834cc.ngrok.io/rest/user/auth?mail='+email+'&password='+passwd)
    .then(response => 
      response.json()
   )
    .then((responseJson) => {
      console.log("matricule form "+responseJson.matricule)
      if( responseJson === null)
      {
        console.log("response null");

        
      }else{
        console.log("user authentified successfully");

        return this.props.navigation.navigate('chat',{
          matricule: responseJson.matricule,
        })
      }
    })
    .catch((error) => {
      Alert.alert(
        'Login Error!',
        "there is no user with such params, please check it with your employer or try reset your password",
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]
      );
      //console.error(error);
    });

  }


  signIn(){
    console.log(this.state['mail'])
    if(this.state['mail']==="" || this.state['password'] ==="" )
    {
      Alert.alert(
        'Login Error!',
        "you need to fill both fields email and password",
        [
          {
            text: 'cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]
      );
      
    }else{
      this.getUser(this.state['mail'],this.state['password'])
      
  }}
	render(){
    
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText={(text) => this.setState({mail:text})}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText={(text) => this.setState({password:text})}
              />  
           <TouchableOpacity style={styles.button}  onPress={this.signIn.bind(this)}>
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});