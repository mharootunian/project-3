import React, { component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './CreateGame.css';
import Lobby from './lobby/Lobby';


const CreateGame = () => {

    return (

        <div class="container" id="fuckThis">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">CreateGame</h5>
                    <p class="card-text"></p>
                    <ul class="list-group1 list-group-flush">
                        <AwesomeButton type="primary"><li class="list-group-item1">Avengers</li></AwesomeButton>
                        <br />
                        <AwesomeButton type="primary">  <li class="list-group-item1">90's Heartthrobs</li></AwesomeButton>
                        <br />
                        <AwesomeButton type="primary"> <li class="list-group-item1">Rom-Com Regulars</li></AwesomeButton>
                        <br />
                        <AwesomeButton type="primary"><li class="list-group-item1">Action Stars</li></AwesomeButton>
                        <br />
                        <AwesomeButton type="primary"> <li class="list-group-item1">Scream Queens</li></AwesomeButton>
                        <br />
                        <AwesomeButton type="primary"><li class="list-group-item1">Workplace Comedies</li></AwesomeButton>
                    </ul>
                </div>
            </div>
        </div>


    );

}

export default CreateGame;
