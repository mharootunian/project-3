import React from 'react';
import axios from 'axios';
import Socket from 'socket.io-client';
import Faces from "../components/Faces";

class Game extends React.Component {
    state = {
        people: [],
        yourPerson: {},
    };

    constructor() {
        super();
        this.socket = Socket("http://localhost:3001");
    }

    componentDidMount() {
// this.socket.emit("game", {
//     gameName: 
// })

        // this.socket.on("game", payload => {
         
        //     axios.get(`/api/game/${payload.category}`)
        //         .then((res) => {
        //             console.log(payload.category);
        //             let people = res.data[0].people;
        //             let randomPerson = people[Math.floor(Math.random() * people.length)];
        //             this.setState({ people: people, yourPerson: randomPerson });
        //         });
        // })
        let category = "Action Stars";
        axios.get(`/api/game/${category}`)
        .then((res) => {
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
    };

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 mt-3">
                            <div className="row">
                                {this.state.people.map(person => (
                                    <div className="col-sm-4">
                                     <Faces person={person}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-sm-2 text-center mx-auto">
                            <h2>Your Person:</h2>
                            <img className="img-fluid"
                                src={`https://image.tmdb.org/t/p/w200${this.state.yourPerson.img}`}
                            />
                            <div className="dropdown btn-group mt-3">
                                <button className="btn btn-secondary dropdown-toggle" data-flip="false" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Make Guess!
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    {this.state.people.map(person => (
                                        <button className="dropdown-item" type="button"
                                        value={person.name} 
                                        onClick={this.makeGuess}>{person.name}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                                   
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Game;