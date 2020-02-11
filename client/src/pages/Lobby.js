import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import "./Lobby.css";

class Lobby extends React.Component {
    render() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 text-center">

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

