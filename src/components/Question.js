import React, {Component} from 'react'
import { connect } from 'react-redux'

class Question extends Component {

  render() {
  //  const { Quesion } = this.props


    const{
      author, id, optionOne, optionTwo, timestamp
    } = this.props.question

    console.log(optionOne)
    //console.log(optionOne)
    return (
        <div className = 'question'>
<span>Question: {optionOne.text}? or {optionTwo.text}?</span>
<br/>
by: {author}
<br/>
<br/>
        </div>
    )
  }
}

function mapStateToProps({authUser, users, questions}, { id }){

  const question = questions[id]

  return({authUser, question})
}

export default connect(mapStateToProps)(Question)
