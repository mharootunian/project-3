import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import "./Lobby.css";

class Lobby extends React.Component {
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
                        <div className="col-sm-4 text-center py-2 btn-container" id="create-game-btns">

                            <AwesomeButton type="primary">Avengers</AwesomeButton>
                            <AwesomeButton type="primary">90's Heartthrobs</AwesomeButton>
                            <AwesomeButton type="primary">Rom-Com Regulars</AwesomeButton>
                            <AwesomeButton type="primary">Action Stars</AwesomeButton>
                            <AwesomeButton type="primary">Scream Queens</AwesomeButton>
                            <AwesomeButton type="primary">Workplace Comedies</AwesomeButton>
                        </div>

                        <div className="col-sm-4 text-center py-2 btn-container" id="join-game-btns">

                            <AwesomeButton type="primary">Avengers</AwesomeButton>
                            <AwesomeButton type="primary">90's Heartthrobs</AwesomeButton>
                            <AwesomeButton type="primary">Rom-Com Regulars</AwesomeButton>
                            <AwesomeButton type="primary">Action Stars</AwesomeButton>
                            <AwesomeButton type="primary">Scream Queens</AwesomeButton>
                            <AwesomeButton type="primary">Workplace Comedies</AwesomeButton>
                        </div>
                    </div>
                </div>


            </div>


        );
    }
};

export default Lobby;

