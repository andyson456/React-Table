import React, { Component } from 'react';

class EditTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        return (
        <h1>Edit Time</h1>
        )
    }
}

export default EditTime;