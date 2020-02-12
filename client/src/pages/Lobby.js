import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import "./Lobby.css";
import Socket from "socket.io-client";

class Lobby extends React.Component {
    state = {
        games: [

        ]
    };
    constructor() {
        super();
        this.socket = Socket("http://localhost:3001");
    }
    componentDidMount() {
        this.socket.emit("game", {
            type: "createGame"
        });
        this.socket.emit("game", {
            type: "findGames"
        });
        this.socket.on("game", payload => {
            if (payload.type === "showGames")
                this.setState({
                    games: payload.games
                });
            console.log("Incoming game list");
            console.log(this.state.games);
        });
    };
    showGames() {
         return (
            this.state.games.map(game => (
                <AwesomeButton type="primary"
                    key={game.name}>{game.name} :: {game.category}
                </AwesomeButton>
            ))
        )

    };


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-between" id="column-titles">
                        <div className="col-sm-4 text-center mt-5">
                            <h2>Create A Game!</h2>
                        </div>
                        <div className="col-sm-4 text-center mt-5">
                            <h2>Join A Game!</h2>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-sm-4 text-center py-2 h-100 btn-container" id="create-game-btns">

                            <a href="/game/avengers" >Avengers</a>
                            <br />
                            <br />
                            <a href="/game/90sheartthrobs">90's Heartthrobs</a>
                            <br />
                            <br />
                            <a href="/game/rom-comregulars">Rom-Com Regulars</a>
                            <br />
                            <br />
                            <a href="/game/actionstars">Action Stars</a>
                            <br />
                            <br />
                            <a href="/game/screamqueens">Scream Queens</a>
                            <br />
                            <br />
                            <a href="/game/workplacecomedies">Workplace Comedies</a><br />
                        </div>

                        <div className="col-sm-4 text-center py-2 btn-container" id="join-game-btns">
                            {this.state.games.length > 0 &&
                                this.showGames

                            }
                            {this.state.games.length === 0 &&
                                <h3>No games found</h3>
                            }
                        </div>
                    </div>
                </div>


            </div>


        );
    }
};

export default Lobby;

