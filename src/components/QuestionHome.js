import React, {Component} from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'
//import {AddQuestionUser} from '../actions/users'


class QuestionHome extends Component {
  constructor(props) {
      super(props);
      this.state = {id: props.id, question: props.question,
      redirect: false,
};
    }






  handleQuestionA = (e) => {
    e.preventDefault()

    const {id} = this.props

    //console.log("arrived at submitted question", id);
  //  console.log("here is the state:", this.state)

    const redirectTrue = true;


    this.setState({
      id,
      redirect: redirectTrue
    }
    )

    

    //console.log("you have selected Option: ", this.state.selectedOption)
    //console.log("question id, authUser and question Vote", question.id, authUser, vote)



  }

  render(){
  //  const { Quesion } = this.props
  const { id, redirect} = this.state


/*
    let {
      authUser,  optionOne, optionTwo, timestamp
    } = this.props.question
*/



    if(redirect === true){

      return(
      <Redirect to={{pathname:`/question/:${id}`, state: {id}}} />
       )
    }

    //console.log(optionOne)
    //console.log(optionOne)
    return(

<div className = 'question'>
  <form onSubmit={this.handleQuestionA}>
    <span>Question: {this.state.question.optionOne.text}...</span>
    <br/>
    <button type="submit">  View Question </button>
    <br/>

    <br/>
    <br/>
  </form>
</div>

    )
  }
}

function mapStateToProps({authUser, users, questions, redirect}, {id}){

  const question = questions[id]

  return({authUser, question, id, redirect})
}

export default connect(mapStateToProps)(QuestionHome)
