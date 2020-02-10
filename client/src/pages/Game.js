import React from 'react';
import axios from 'axios';

class Game extends React.Component {
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
                let people = res.data[0].people;
                let randomPerson = people[Math.floor(Math.random() * people.length)];
                this.setState({ people: people, yourPerson: randomPerson });
            });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                {this.state.people.map(person => (
                                    <div className="col-sm-4">
                                        <img className="img-fluid img-thumbnail mb-2"
                                            key={person._id}
                                            src={`https://image.tmdb.org/t/p/w200${person.img}`}
                                            width="150px"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-sm-3 mx-auto text-center">
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
                                        <button class="dropdown-item" type="button">{person.name}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Game;