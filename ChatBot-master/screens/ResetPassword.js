import React from 'react';
import {  View,  StyleSheet} from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";


const style = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 25
  }
});
let i =0;
const botMessageToGiftedMessage = botMessage => ({
  _id: i,
  text: botMessage,
  createdAt: new Date(),
  user: {
    _id: 2,
    name: "React Native",
    avatar:require('../bot.png')
  },
 
});


export default class App extends React.Component {

    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: 'Resetting your password',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      };
  state = {
    messages: []
  };
  
  constructor(props) {
      super(props);
        const newMessage = botMessageToGiftedMessage("hello!!");
        this.setState({ messages: [newMessage, ...this.state.messages] 
      });
    }
   
    
    sendMessage(val) {

      fetch("https://65b834cc.ngrok.io/rest/user/send", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        'sender' : "matricule",
        'message': val.text,
      }
    )
  }
).then(response =>    
      response.json()    
  )
     .then((responseJson) => {
            // you'll get the response in responseJson
           console.log(responseJson);
           console.log(responseJson.text);
          
           const botMessage=botMessageToGiftedMessage(responseJson.text);
           console.log(botMessage);
           this.setState({ messages: [botMessage, ...this.state.messages]});
              console.log(this.state.messages)         
       } )
        .catch((error) => {
            //you will get error here.
    
           console.error(error);
          
        });       
    }

    onSend = messages => {
      this.setState({ messages: [...messages, ...this.state.messages] })

        messages.forEach(message => {
            console.log(+message.text);
            i++;
          this.sendMessage(message);

      });
    }
     render() {
    return (
        
        <View style={style.container}>
        <GiftedChat
          showUserAvatar ={true } 
          user={{
            _id: 1,
            avatar:require('../icon.png')
          }}
          messages={this.state.messages}
          onSend={this.onSend.bind(this)}
        />
      </View>
    )
  }
}