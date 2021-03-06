import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'
import BarChart from 'react-bar-chart';


import {handleQuestionAnswer} from '../actions/questions'
//import {save_question_answer_user} from '../actions/users'
//import {AddQuestionUser} from '../actions/users'
import {handleAnswerQuestionUser} from '../actions/shared'

class Question extends Component {
  constructor(props) {
      super(props);


      const{
        author, id, optionOne, optionTwo, timestamp,
      } = this.props.question
        this.optionOneText = ""
        this.optionTwoText = ""

    //  let BarChart = ReactD3.BarChart;
    //var BarChart = require('react-d3-components').BarChart;

      this.state = {author, id, optionOne, optionTwo, timestamp, redirect: false}

      //this.state = {optionOneText: this.state.OptionOne.text}
    }
  //  console.log("is state answered?", this.props.answered)


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
 //let optionOneText =  this.state.OptionOne.text
  if(this.props.answered === true)
  {
     this.optionOneText =  this.state.optionOne.text
     this.optionTwoText = this.state.optionTwo.text
    return(

      <div>


<BarChart ylabel='Percent'
                  width={800}
                  height={400}
                  margin={{top: 20, right: 20, bottom: 30, left: 40}}
                  data={[
                  {text: this.optionOneText , value: this.props.optionOnePercent},
                  {text: this.optionTwoText, value: this.props.optionTwoPercent}
                  ]}/>

    <br/>


    <p>{
      //optionOneP
    }</p>
  </div>
     )
  }
  if(this.state.redirect === true){

    return(
    <Redirect to={{pathname:'/'}}/>
     )
  }

    if(this.props.answered === false)
    {
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
}

function mapStateToProps({authUser, users, questions}, props){

  const question = questions[props.location.state.id]
  let answered = false;
  const id = props.location.state.id
  let optionOne = 0
  let optionTwo = 0
  let total = 0
  let optionOnePercent = 0
  let optionTwoPercent = 0

  if(question.optionOne.votes.includes(authUser) || question.optionTwo.votes.includes(authUser))
  {
    optionOne = question.optionOne.votes.length
    optionTwo =  question.optionTwo.votes.length
    answered = true;
    total  = optionOne + optionTwo
    optionOnePercent = (optionOne / total) * 100
    optionTwoPercent = (optionTwo / total) * 100
    optionOnePercent = Math.round(optionOnePercent )
    optionTwoPercent = Math.round(optionTwoPercent )
  }

  return({authUser, question, id, answered, optionOnePercent, optionTwoPercent})
}

export default connect(mapStateToProps)(Question)
