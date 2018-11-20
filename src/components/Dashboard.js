import React, { Component } from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <h3>Your Questions</h3>
        <ul className='dashboard-list'>
        {this.props.questionIDs.map((id) => (
          <li key={id}>
          <Question id={id} />
          </li>

        ))}

        </ul>
      </div>
    )
  }
}

function mapStateToProps ({questions}){
  return {
    questionIDs: Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }

}

export default connect(mapStateToProps)(Dashboard)
