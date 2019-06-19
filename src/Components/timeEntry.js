import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import routes from '../routes';

class TimeEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        return (
        <NavItem>
        <h1>Time Entry</h1>
            <NavLink className={'nav-link'} activeClassName={'active'}
                to={routes.editTime}><Button variant="contained" color="primary">
                <AddIcon />Edit Time</Button>
            </NavLink>
        </NavItem>
        )
    }
}

export default TimeEntry;