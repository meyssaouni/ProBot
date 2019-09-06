    
import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './screens/Login';
import Chat from './screens/Chat';
import Reset from './screens/ResetPassword';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  login: {screen: Login},
  chat: {screen: Chat},
  resetPassword:{screen: Reset},
},
{

	/* The header config from HomeScreen is now here */
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: '#455a64',
		},
	},
});

const AppContainer = createAppContainer(MainNavigator);

export default class Routes extends Component{
	static navigationOptions = {
		headerStyle: {
			backgroundColor: '#455a64',
		},
	};
	render() {
		return(
			 <AppContainer />
			
		)

}
}