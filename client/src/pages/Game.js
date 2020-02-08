import React from 'react';
import axios from 'axios';

class Game extends React.Component {
    state = {
        people: []
    };

    componentDidMount() {
        socket.on("game", payload => {
            axios.get(`/api/game/${payload.category}`)
            .then((res) => {
                this.setState({ people: res.people });
            })
        })
    };



}