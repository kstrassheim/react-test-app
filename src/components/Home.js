import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };


    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
        // this.timerID = setInterval(
        //   () => this.tick(),
        //   1000
        // );
    }

    render() {
        return (
            <div className="Home">    
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

export default Home;