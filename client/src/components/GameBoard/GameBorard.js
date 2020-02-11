import React, { Component } from 'react';
import ImageContainer from '../Images/imageContainer';
import YouPic from '../YoPicContainer/YouPic';
import ChatBox from '../ChatBox/ChatBox';

import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/NavBar';
import './GameBoard.css';


class GameBoard extends Component {
render() {
       return (
           <div className="flexbox-container">
            <NavBar />
           <ImageContainer /> 
           <YouPic />
           <ChatBox />

</div>

        );  
 };

}




export default GameBoard;