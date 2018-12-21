import React, {Component} from 'react'
import { connect } from 'react-redux'


import {handleQuestionAnswer} from '../actions/questions'
//import {AddQuestionUser} from '../actions/users'


class Question extends Component {
  constructor(props) {
      super(props);
      //console.log("here is the props:", props)

    }


  handleOptionChange = (changeE) =>{
    console.log("Selected option: ",changeE.target.value)
    this.setState({
      selectedOption: changeE.target.value
    }
  )
  }

  handleQuestionA = (e) => {
    e.preventDefault()

    const {dispatch, authUser, question} = this.props

    const vote = this.state.selectedOption;

    console.log("you have selected Option: ", this.state.selectedOption)
    console.log("question id, authUser and question Vote", question.id, authUser, vote)



   dispatch(handleQuestionAnswer({
      id: question.id,
      authUser,
      vote
    }))
  }

  render(){
  //  const { Quesion } = this.props

  console.log("made it to props", this.props)
    const{
      author, id, optionOne, optionTwo, timestamp
    } = this.props.question

    //console.log(optionOne)
    //console.log(optionOne)
    return(

<div className = 'question'>
  <form onSubmit={this.handleQuestionA}>
    <span>Question: {optionOne.text}?<input type="radio" name={id} value={'optionOne'} onChange={this.handleOptionChange}></input> or {optionTwo.text}?
      <input type="radio" name={id} value={'optionTwo'} onChange={this.handleOptionChange}></input></span>
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
  console.log("map state to props:", props)
  const id = props.location.state.id
  return({authUser, question, id})
}

export default connect(mapStateToProps)(Question)
