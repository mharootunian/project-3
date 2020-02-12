import React from 'react';

class Faces extends React.Component {
    state = {
        blur: ""
    };

    makeBlur = (e) => {
        this.setState({blur: "blur(20px)"})
    };

    render() {
        return (
            <img className="img-fluid img-thumbnail mb-2"
            style={{filter: this.state.blur}}
            onClick={this.makeBlur}
            key={this.props.person._id}
            src={`https://image.tmdb.org/t/p/w200${this.props.person.img}`}
            width="200px"
        />
        )
    }
};

export default Faces;