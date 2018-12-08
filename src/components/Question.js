import React, {Component} from 'react'
import { connect } from 'react-redux'
import {handleQuestionAnswer} from '../actions/questions'


class Question extends Component {
  constructor(props) {
      super(props);
      this.state = { };
    }
  }

  handleOptionChange = (changeE) =>{
    console.log("Selected option: ",changeE.target.value)
    this.setState({
      selectedOption: changeE.target.value
    }
    )
  }

  handleQuestionAnswer = (e) => {
    e.preventDefault()

    const {dispatch, authUser, question} = this.props
    console.log("you have selected Option: ", this.state.selectedOption)
    /*
    dispatch(handleQuestionAnswer({
      id: question.id,
      authUser,
      vote: question.vote
    })) */
  }

  render() {
  //  const { Quesion } = this.props


    const{
      author, id, optionOne, optionTwo, timestamp
    } = this.props.question

    //console.log(optionOne)
    //console.log(optionOne)
    return (

=======

<div className = 'question'>
  <form onSubmit={this.handleQuestionAnswer}>
    <span>Question: {optionOne.text}?<input type="radio" name={id}value={this.state.selectedOption === 'optionOne'} onChange={this.handleOptionChange}></input> or {optionTwo.text}?
      <input type="radio" name={id} value={this.state.selectedOption==='optionTwo'} onChange={this.handleOptionChange}></input></span>
    <br/>
    <button type="submit">Submit</button>
    <br/>
    by: {author}
    <br/>
    <br/>
  </form>
</div>
>>>>>>> bcafd6da42d29786e936bb71064910f6d3a514c4
    )
  }
}

function mapStateToProps({authUser, users, questions}, { id }){

  const question = questions[id]

  return({authUser, question})
}

export default connect(mapStateToProps)(Question)
