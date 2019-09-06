import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar ,
} from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

import Splash from './screens/Splash';
import Routes from './Routes';



export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <Splash />;
    }
  
    return (
      <View style={styles.container}>
      <StatusBar
         backgroundColor="#455a64"
        barStyle="light-content"
         hidden={true}
       />
      <Routes/>
    </View>
     
    );
  }
} 

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:"#455a64",
  }
});