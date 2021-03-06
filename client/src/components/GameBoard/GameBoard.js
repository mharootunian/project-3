import React from 'react';
import axios from 'axios';
import CardFlip from '../CardFlip/CardFlip';
import ChatBox from '../ChatBox/ChatBox';
import './GameBoard.css';


class GameBoard extends React.Component {
       state = {
           people: [],
           yourPerson: {}
       };
       componentDidMount() {
           // socket.on("game", payload => {
           //     axios.get(`/api/game/${payload.category}`)
           //     .then((res) => {
           //         this.setState({ people: res.data[0].people });
           //     })
           // })
           let category = "Action Stars";
           axios.get(`/api/game/${category}`)
               .then((res) => {
                      console.log(res);
                   let people = res.data[0].people;
                   let randomPerson = people[Math.floor(Math.random() * people.length)];
                   this.setState({ people: people, yourPerson: randomPerson });
               });
       };
       makeGuess = (e) => {
           e.preventDefault();
           let guess = e.currentTarget.value;
           if (guess === this.state.yourPerson.name) {
               // Something tells them they win!
           }
           else {
               // You lose!
           };
       }
       render() {
           return (
               <div>
                   <div className="container" id="root">
                       <div className="row">
                           <div className="col-sm-6">
                               <div className="row">
                                      <CardFlip />
                                   {this.state.people.map(person => (
                                       <div className="col-sm-4">                                              
                                           <img className="img-fluid img-thumbnail mb-2" id="cards"
                                               key={person._id}
                                               src={`https://image.tmdb.org/t/p/w200${person.img}`}
                                               width="150px"
                                           />
                                       </div>
                                   ))}
                                   
                               </div>
                           </div>

                           <div className="col-sm-3 ml-1 text-center">
                               <h2>Your Person:</h2>
                               <img className="img-fluid"
                                   src={`https://image.tmdb.org/t/p/w200${this.state.yourPerson.img}`}
                               />
                               <div class="dropdown btn-group mt-3">
                                   <button class="btn btn-secondary dropdown-toggle" data-flip="false" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Make Guess!
                                   </button>
                                   <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                       {this.state.people.map(person => (
                                           <button class="dropdown-item" type="button"
                                           value={person.name} 
                                           onClick={this.makeGuess}>{person.name}</button>
                                       ))}
                                   </div>
                               </div>
                           </div>
                           <div className="col-sm-3">
                                 <ChatBox /> 
                           </div>
                       </div>
                   </div>
               </div>
           )
       }
   };
   export default GameBoard;
   
   
   