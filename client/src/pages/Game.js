import React from 'react';
import axios from 'axios';

class Game extends React.Component {
    state = {
        people: []
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
            this.setState({ people: res.data[0].people });
        });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.people.map(person => (
                            <div className="col-sm-4">
                            <img className="img-fluid" 
                                 key={person._id}
                                 src={`https://image.tmdb.org/t/p/w200${person.img}`}                            />
                                 </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
};

export default Game;