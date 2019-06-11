import React, { Component } from 'react';
import './index.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        const data = [{
            employee: '',
            date: '',
            type: '',
            activity: '',
            in: '',
            out: '',
            hours: '',
            notes: '',
            approved: '',
            quickbooks: ''
          },{
         
          }]
         
          const columns = [{
            Header: 'Date',
            accessor: 'date'
          }, {
            Header: 'Employee',
            accessor: 'employee' // String-based value accessors!
          }, {
            Header: 'Type',
            accessor: 'type',
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Project',
          }, {
            Header: 'Activity', // Custom header components!
            accessor: 'activity'
          }, {
            Header: 'In'
          }, {
            Header: 'Out'
          }, {
            Header: 'Hours' 
          }, {
            Header: 'Notes'
          }, {
            Header: 'Approved'
          }, {
            Header: 'QuickBooks'
          }]
         
          return (
          <ReactTable
            data={data}
            columns={columns}
          />)
        
    }
}

export default App;