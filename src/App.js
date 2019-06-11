import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import routes from './routes';
import { NavLink, Route } from 'react-router-dom';
import Table from './Components/table';



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
            <Navbar color="faded">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className={'nav-link'} activeClassName={'active'}
                        to={routes.table}>Table</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Route exact path={routes.table} component={Table} />
        </div>
    )}
}

export default App;