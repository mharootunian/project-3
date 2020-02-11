import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
// import io from 'socket.io-client';
import GameBoard from '../GameBoard/GameBoard';
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
            teamName: 'What The Face',
            imageUrl: 'https://i.pinimg.com/originals/d6/b9/3d/d6b93d399af39f288fb17e092a7694a2.gif'
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>)
    }
  }

export default ChatBox;