import React, {Component} from 'react'
import { connect } from 'react-redux'

class LeaderboardBox extends Component{
  constructor(props) {
      super(props);
      //console.log("here is the props:", props)
    }

  render(){
    return(
    <div>
      leaderboardbox
    </div>
    )
  }


}

function mapStateToProps({users}){


}
export default connect()(LeaderboardBox)
