import React, {Component} from 'react';

import JoinGame from '../JoinGame.component';
import CreateGame from '../CreateGame.component';

import './lobby.css';

class Lobby extends Component  {
  render(){
    return(
      <div className="flexbox-container">
        <CreateGame />
        <JoinGame />
      </div>
    )

  }

}
export default Lobby;


