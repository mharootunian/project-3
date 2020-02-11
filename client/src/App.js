import React from "react";
import NavBar from "./components/Navbar/Navbar";
import Game from "./pages/Game";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
const socket = require('socket.io-client')('http://localhost:3001');
import GameBoard from "../src/components/GameBoard/GameBorard";
import YoPic from "../src/components/YoPic/YoPic";
import Images from "../src/components/Images/imageContainer";

function App() {

  // componentDidMount() {
    

    
  // }
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
    <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/lobby" component={Lobby} /> */}
          <Route path="/game/:id" component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
