import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import {handleQuestionAnswer} from '../actions/questions'
//import {save_question_answer_user} from '../actions/users'
//import {AddQuestionUser} from '../actions/users'
import {handleAnswerQuestionUser} from '../actions/shared'

class Question extends Component {
  constructor(props) {
      super(props);
      //console.log("here is the props:", props)
      const{
        author, id, optionOne, optionTwo, timestamp,
      } = this.props.question
      this.state = {author, id, optionOne, optionTwo, timestamp, redirect: false}

    }


  handleOptionChange = (changeE) =>{

    this.setState({
      selectedOption: changeE.target.value
    }
  )
  }

  handleQuestionA = (e) => {
    e.preventDefault()

    const {dispatch, authUser, question} = this.props

    const vote = this.state.selectedOption;




   dispatch(handleAnswerQuestionUser({

      id: question.id,
      authUser,
      vote
    }))


    dispatch(handleQuestionAnswer({

      id: question.id,
      authUser,
      vote
    })

  )

this.setState({redirect: true})
  }

  render(){
  //  const { Quesion } = this.props
  if(this.state.redirect === true){

    return(
    <Redirect to={{pathname:'/'}}/>
     )
  }


    //console.log(optionOne)
    //console.log(optionOne)
    return(
<div className = 'question'>
  <form onSubmit={this.handleQuestionA}>
    <span>Question: {this.state.optionOne.text}?<input type="radio" name={this.state.id} value={'optionOne'} onChange={this.handleOptionChange}></input> or {this.state.optionTwo.text}?
      <input type="radio" name={this.state.id} value={'optionTwo'} onChange={this.handleOptionChange}></input></span>
    <br/>
    <button type="submit">Submit</button>
    <br/>

    <br/>
    <br/>
  </form>

</div>
    )
  }
}

function mapStateToProps({authUser, users, questions}, props){


  const question = questions[props.location.state.id]

  const id = props.location.state.id
  return({authUser, question, id})
}

export default connect(mapStateToProps)(Question)
