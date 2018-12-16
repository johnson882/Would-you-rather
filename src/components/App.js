import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import '../App.css'
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion'
import Navbar from './Navbar'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
        {this.props.loading === true
        ? null :
        <div>
         <Route path='/' exact component={Dashboard} />
        <Route path='/new' exact component={NewQuestion} />
        </div>

         }

      </div>
        </Router>
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
