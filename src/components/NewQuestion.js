import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/shared'
//import {AddQuestionUser} from '../actions/AddQuestionUser'

class NewQuestion extends Component{

state = {
  optionOne: ' ',
  optionTwo: ' ',
  toHome: false,

}

handleChangeOptionOne = (e) => {
  const text = e.target.value

  this.setState(() => ({
    optionOne: text
  }))
}

handleChangeOptionTwo = (e) => {
  const text = e.target.value

  this.setState(() => ({
    optionTwo: text
  }))
}

handleSubmit = (e) => {
    e.preventDefault()
     const { optionOne, optionTwo } = this.state
     const {dispatch, authedUser} = this.props
     console.log(authedUser)
     // todo: Add Tweet to Store
     console.log('New Question: OptionOne: ', optionOne, 'OptionTwo: ', optionTwo)
     dispatch(handleAddQuestion({optionOne, optionTwo, authedUser}))

     this.setState(() => ({
      optionOne,
      optionTwo,
      toHome: true,
    }))
    console.log(this.state)
  }

render() {
const {optionOne, optionTwo, toHome} = this.state
if (toHome === true) {
     return <Redirect to='/' />
   }
  return(

    <div>

    <h3 className = 'center'> Compose new Question</h3>

    <form  onSubmit={this.handleSubmit}>
    Option One:
    <textarea
               placeholder="Question One?"
               value={optionOne}
               onChange={this.handleChangeOptionOne}
               className='textarea'
               maxLength={280}
    />
    Option Two:
    <textarea
               placeholder="Question Two?"
               value={optionTwo}
               onChange={this.handleChangeOptionTwo}
               className='textarea'
               maxLength={280}
            />


    <button
            className='btn'
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}>
              Submit
          </button>

            </form>
    </div>

  )

}



}

function mapStateToProps(state){
  return({authedUser: state.authUser})
}

export default connect(mapStateToProps)(NewQuestion)
