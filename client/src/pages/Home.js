import React from 'react';
import "./Home.css";

class Home extends React.Component {
    render() {
        return (
            <div className="container w-50 mt-5 p-2 text-center" id="description">

                <h2>A new twist on the classic game of Guess Who! Ask questions to figure out which celebrity the other player has.</h2>
                <h3>Log in to try it out!</h3>
            </div>
        )
    }
}

export default Home;