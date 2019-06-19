import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import routes from './routes';
import { NavLink, Route } from 'react-router-dom';
import Table from './Components/table';
import TimeEntry from './Components/timeEntry';
import EditTime from './Components/editTime';
import AddTime from './Components/addTime';
import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import SettingsIcon from '@material-ui/icons/Settings';
import FilterIcon from '@material-ui/icons/Filter';
import AddIcon from '@material-ui/icons/Add';
import Flexbox from 'flexbox-react';

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
            <Flexbox display="flex" flexWrap="nowrap">
                <Button variant="contained" color="secondary" m={2}>
                    <AccessAlarmIcon />
                    Clock Out
                </Button>

                <NavItem>
                    <NavLink className={'nav-link'} activeClassName={'active'}
                    to={routes.addTime}><Button variant="contained" color="primary">
                        <AddIcon />Add Time</Button>
                    </NavLink>
                </NavItem>

                <Flexbox display="flex" flexDirection="row-reverse">
                    <Button variant="contained">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 12l-4-4v3H3v2h15v3z"/></svg>								
                        Push to Quickbooks</Button>
                    <Button variant="contained">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"/></svg>								
                        Export</Button>
                    <Button variant="contained">
                        <SettingsIcon />
                        Settings</Button>
                    <Button variant="contained">
                        <FilterIcon />
                        Filter</Button>
                </Flexbox>
            </Flexbox>
            
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