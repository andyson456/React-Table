import React, { Component } from 'react';

class AddTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            employee: '',
            type: '',
            project: '',
            hours: '',
            notes: ''
        }
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return(
            <form>
                <input placeholder="Employee" 
                value={this.state.employee}
                onChange={e => this.setState({employee: e.target.value})} />
                <br />
                <input placeholder="Type" 
                value={this.state.type}
                onChange={e => this.setState({type: e.target.value})} />
                <br />
                <input placeholder="Project" 
                value={this.state.project}
                onChange={e => this.setState({project: e.target.value})} />
                <br />
                <input placeholder="Hours" 
                value={this.state.hours}
                onChange={e => this.setState({hours: e.target.value})} />
                <br />
                <input placeholder="Notes" 
                value={this.state.notes}
                onChange={e => this.setState({notes: e.target.value})} />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }
}

export default AddTime;