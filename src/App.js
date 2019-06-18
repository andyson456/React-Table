import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import routes from './routes';
import { NavLink, Route } from 'react-router-dom';
import Table from './Components/table';
import TimeEntry from './Components/timeEntry';
import EditTime from './Components/editTime';
import AddTime from './Components/addTime';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AddIcon from '@material-ui/icons/Add';

class App extends Component {
    constructor(){
        super();
        this.state = {

        }
    };

    render() {
        return(
        <div className="App">
            <h1><a className="navbar-brand" href="home">Employee Time Clock</a></h1>
            <Button variant="contained" color="secondary">
                <AccessAlarmIcon />
                Clock Out
            </Button>
            
            <Button variant="contained" color="primary">
                <AddIcon />
                Add Time
            </Button>
            <Navbar color="faded">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className={'nav-link'} activeClassName={'active'}
                        to={routes.table}>Table</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={'nav-link'} activeClassName={'active'}
                        to={routes.timeEntry}>Time Entry</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={'nav-link'} activeClassName={'active'}
                        to={routes.editTime}>Edit Time</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={'nav-link'} activeClassName={'active'}
                        to={routes.addTime}>Add Time</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Route exact path={routes.table} component={Table} />
            <Route exact path={routes.timeEntry} component={TimeEntry} />
            <Route exact path={routes.editTime} component={EditTime} />
            <Route exact path={routes.addTime} component={AddTime} />
        </div>
    )}
}

export default App;