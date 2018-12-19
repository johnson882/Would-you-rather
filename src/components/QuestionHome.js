import React, {Component} from 'react'
import { connect } from 'react-redux'
import {handleQuestionAnswer} from '../actions/questions'
//import {AddQuestionUser} from '../actions/users'


class QuestionHome extends Component {
  constructor(props) {
      super(props);
      this.state = {id:this.props.id};
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


    const{
      author, id, optionOne, optionTwo, timestamp
    } = this.props.question
    console.log(optionOne)

    //console.log(optionOne)
    //console.log(optionOne)
    return(

<div className = 'question'>
  <form onSubmit={this.handleQuestionA}>
    <span>Question: {this.props.question.optionOne.text}</span>
    <br/>
    <button type="submit">  View Question </button>
    <br/>
    by: {author}
    <br/>
    <br/>
  </form>
</div>

    )
  }
}

function mapStateToProps({authUser, users, questions}, { id }){

  const question = questions[id]

  return({authUser, question,id})
}

export default connect(mapStateToProps)(QuestionHome)
