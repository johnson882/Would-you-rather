import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import '../App.css'
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion'
import Navbar from './Navbar'
import Loggin from './Loggin'
import Loggout from './Loggout'
import Question from './Question'
//import QuestionHome from './QuestionHome'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
      <div className="App">
{this.props.authUser}


        {this.props.authUser === null
        ?<Loggin/>:

        <div>

         <Navbar />
         <Route path='/' exact component={Dashboard} />
         <Route path='/new' exact component={NewQuestion} />
         <Route path='/loggout' exact component={Loggout} />
         <Route path='/question/:id'  component={Question} />
         <Route path='/leaderboard'  component={Leaderboard}/>


        </div>
         }

      </div>
        </Router>
    );
  }
}

function mapStateToProps({authUser, id})
{
  return{
    loading: authUser === null,
    authUser

  }
}

export default connect(mapStateToProps)(App);
