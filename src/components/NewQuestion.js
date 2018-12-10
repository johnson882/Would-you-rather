import React, {Component} from 'react'

class NewQuestion extends Component{

state = {
  optionOne: ' ',
  optionTwo: ' ',

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
     // todo: Add Tweet to Store
     console.log('New Question: OptionOne: ', optionOne, 'OptionTwo: ', optionTwo)
     this.setState(() => ({
      optionOne,
      optionTwo,
    }))
    console.log(this.state)
  }

render() {
const {optionOne, optionTwo} = this.state
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
export default NewQuestion
