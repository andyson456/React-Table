import React, { Component } from 'react';

class TimeEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        return (
        <h1>Time Entry</h1>
        )
    }
}

export default TimeEntry;