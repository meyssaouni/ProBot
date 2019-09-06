import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import Logo from '../Component/Logo';


export default class Splash extends React.Component {
    render() {  
      return (
        <View style={styles.container}>
				<Image  style= {styles.imageStyle}
          			source={require('../bot.png')}/>
          		<Text style={styles.logoText}>making proffessionnal life easier ;)</Text>	
  			</View>
      );
    }
  }
  const styles = StyleSheet.create({
    container :{
        flex:1,
      backgroundColor: '#455a64',
      alignItems:'center',
    justifyContent :'center'
    },
    imageStyle : {
        alignItems: 'center',
        marginVertical: 50,
        marginHorizontal: 50,
        width:150, 
        height: 150,
        flexDirection:'row'
    },

    logoText : {
        marginVertical: 15,
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)'
    }
  });