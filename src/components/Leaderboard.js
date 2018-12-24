import React, {Component} from 'react'
import { connect } from 'react-redux'

import LeaderboardBox from './LeaderboardBox'

class Leaderboard extends Component{
  constructor(props) {
      super(props);
      //console.log("here is the props:", props)
    }

  render(){
    return(
    <div>
      leaderboard
      <LeaderboardBox/>
    </div>
    )
  }


}

function mapStateToProps({users}){


}
export default connect()(Leaderboard)
