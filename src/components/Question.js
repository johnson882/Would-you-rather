import React, {Component} from 'react'
import { connect } from 'react-redux'
import {handleQuestionAnswer} from '../actions/questions'


class Question extends Component {
  handleQuestionAnswer = (e) => {
    e.preventDefault()

    const {dispatch, authUser, question} = this.props
    console.log("test")
    dispatch(handleQuestionAnswer({
      id: question.id,
      authUser,
      vote: question.vote
    }))
  }

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
