import ReactCardFlip from 'react-card-flip';
import React from 'react';
import GameBoard from "../GameBoard/GameBoard";
import './CardFlip.css';

class CardFlip extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <YOUR_FRONT_CCOMPONENT>
          <img className="img-fluid img-thumbnail mb-2" id="cards"
                                               key={person._id}
                                               src={`https://image.tmdb.org/t/p/w200${person.img}`}
                                               width="150px"
                                           />
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_FRONT_CCOMPONENT>
   
          <YOUR_BACK_COMPONENT>
            X
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_BACK_COMPONENT>
        </ReactCardFlip>
      );
      }
    }

export default CardFlip;
