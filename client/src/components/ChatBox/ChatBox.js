import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
// import io from 'socket.io-client';
import Game2 from '../GameBoard/Game2';
import './ChatBox.css';



class ChatBox extends Component {
 
    constructor() {
      super();
      this.state = {
        messageList: []
      };
    }
   
    _onMessageWasSent(message) {
      this.setState({
        messageList: [...this.state.messageList, message]
      })
    }
   
    _sendMessage(text) {
      if (text.length > 0) {
        this.setState({
          messageList: [...this.state.messageList, {
            author: 'them',
            type: 'text',
            data: { text }
          }]
        })
      }
    }
   
    render() {
      return (<div>
        <Launcher
          agentProfile={{
            teamName: 'What Da',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>)
    }
  }

export default ChatBox;