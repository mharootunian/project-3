import React, { component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './JoinGame.css';

import Lobby from './lobby/Lobby';


const JoinGame = () => {

  return (

    <div class="container" id="fuckThis2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title1">JoinGame</h5>
          <p class="card-text"></p>
          <ul class="list-group2 list-group-flush">
            <AwesomeButton type="primary"><li class="list-group-item2">Avengers</li></AwesomeButton>
            <br />
            <AwesomeButton type="primary">  <li class="list-group-item2">90's Heartthrobs</li></AwesomeButton>
            <br />
            <AwesomeButton type="primary"> <li class="list-group-item2">Rom-Com Regulars</li></AwesomeButton>
            <br />
            <AwesomeButton type="primary"><li class="list-group-item2">Action Stars</li></AwesomeButton>
            <br />
            <AwesomeButton type="primary"> <li class="list-group-item2">Scream Queens</li></AwesomeButton>
            <br />
            <AwesomeButton type="primary"><li class="list-group-item2">Workplace Comedies</li></AwesomeButton>
          </ul>
        </div>
      </div>
    </div>


  )

}

export default JoinGame;