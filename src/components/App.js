import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import '../App.css'
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        {this.props.loading === true
        ? null : <Dashboard/> }

      </div>
    );
  }
}

function mapStateToProps({authUser})
{
  return{
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App);
