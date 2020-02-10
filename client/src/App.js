 import React from "react";
 import ReactDom from 'react-dom';
 import {
   BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
 import "./App.css";
 //import Navbar from './components/navbar.component';
 import 'bootstrap/dist/css/bootstrap.css';
 import CategoryList from './components/CategoryList.component';
 import CreateGame from './components/CreateGame.component';
 import Scoreboard from './components/Scoreboard.component';
 import CreateUser from './components/CreateUser.component';
 import PlayGame from './components/playGame.component';
 import Button from './components/Button.component';
 import lobby from "./components/lobby/Lobby";
 import JoinGame from "./components/JoinGame.component";

 const App = () => {
   return (

       <Router>
         <div>
           <Switch>
         <Route path="/" exact component={CategoryList} />
         <Route path="/User" component={CreateUser} />
         <Route path="/createGame" component={CreateGame} />
         <Route path="/Game" component={JoinGame} />
         <Route path="/scoreboard" component={Scoreboard} />
         <Route path="/playGame" component={PlayGame} />
         <Route path="/Button" component={Button} />
         <Route path='/lobby' component={lobby} />
           </Switch>
         </div>
       </Router>

   );
 }
 export default App;

// console.log("running from app.js in src folder");