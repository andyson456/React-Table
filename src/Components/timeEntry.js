import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import routes from '../routes';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
  };


class TimeEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        return (
        <div>
            
            <h1>Time Entry</h1>
            <NavLink className={'nav-link'} activeClassName={'active'}
                to={routes.editTime}><Button variant="contained" color="primary">
                <AddIcon />Edit Time</Button>
            </NavLink>
            
            <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
                lat: 44.0521,
                lng: -123.0868
            }}
            />
            </div>
        )
    }
}

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default GoogleApiWrapper({
    apiKey: API_KEY })(TimeEntry);