import React, {Component} from 'react'
import { connect } from 'react-redux'

class LeaderboardBox extends Component{
  constructor(props) {
      super(props);
      console.log(this.props)
      //console.log("here is the props:", props)
    }

  render(){
    return(
    <div>
    <br/>
      LeaderboardBox
      <br/>
      <br/>

      user
      <br/>
      <br/>
      questions asked:
      <br/>
      questions answered:
      <br/>

    </div>
    )
  }


}

function mapStateToProps({users}, props){
   let aUsers = users[props.user]
   return(props)
}
export default connect(mapStateToProps)(LeaderboardBox)
