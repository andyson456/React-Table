import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class EditTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            employee: '',
            type: '',
            project: '',
            hours: '',
            notes: '',
            reasonForChange: ''
        }
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        //this.props.onSubmit(this.state);
        console.log(this.state);
    }

    render() {
        return(
            <form>
                <h1>Edit Time</h1>
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
                <input placeholder="Reason for change" 
                value={this.state.reasonForChange}
                onChange={e => this.setState({reasonForChange: e.target.value})} />
                <br />
                <br />
                <Button variant="contained" color="secondary">Cancel</Button>
                <Button variant="contained" color="primary" onClick={e => this.onSubmit(e)}>Save Changes</Button>
            </form>
        )
    }
}

export default EditTime;