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
        <form>
<span>Question: {optionOne.text}?<input type="radio" name={id}></input> or {optionTwo.text}?
<input type="radio" name={id}></input></span>
<br/>
<button >Submit</button>
<br/>
by: {author}
<br/>
<br/>
  <form>
        </div>
    )
  }
}

function mapStateToProps({authUser, users, questions}, { id }){

  const question = questions[id]

  return({authUser, question})
}

export default connect(mapStateToProps)(Question)
