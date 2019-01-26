import React, {Component} from 'react'
import { connect } from 'react-redux'

class LeaderboardBox extends Component{
  constructor(props) {
      super(props);
      //console.log(this.props)
      //console.log("here is the props:", props)
    }

  render(){
    return(
    <div>
    <br/>

      <br/>
      <br/>

      user: {this.props.user}
      <br/>
      <br/>
      Total questions asked:
      <br/>
      Total questions answered:
      <br/>

    </div>
    )
  }


}

function mapStateToProps({users}, props){
   let aUsers = users[props.user]
   let answerTotal = Object.keys(aUsers.answers).length;
   let questionTotal = Object.keys(aUsers.questions).length;
   //console.log("aUsers: ", aUsers)
   //console.log("answerTotal: ", answerTotal)
   //console.log("questionTotal: ", questionTotal)


   return(aUsers)
}
export default connect(mapStateToProps)(LeaderboardBox)
