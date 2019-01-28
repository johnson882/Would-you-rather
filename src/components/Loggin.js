import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleChangeAuth} from '../actions/shared'

class Loggin extends Component{
  constructor(props){
  super(props)
  this.state = {
    authUser: this.props.selectedUser

  }
}

handleOptionChange = (changeE) => {
  

const {dispatch} = this.props

dispatch(handleChangeAuth(
 changeE.target.value
))



}

  render(){
    return(
      <div>
    <p>  Welcome to the Would you Rather App </p>
      <br/>
    Sign In as User:
    <select onChange={this.handleOptionChange} >
      <option>Select</option>
      <option value="tylermcginnis">Tyler McGinnis</option>
      <option value="sarahedo">Sarah Edo</option>
      <option value="johndoe">John Doe</option>

    </select>
      </div>
    )
  }


}

function mapStateToProps({authUser}){
return({authUser})

}

export default connect(mapStateToProps)(Loggin)
