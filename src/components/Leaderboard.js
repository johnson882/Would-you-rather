import React, {Component} from 'react'
import { connect } from 'react-redux'

import LeaderboardBox from './LeaderboardBox'

class Leaderboard extends Component{
  constructor(props) {
      super(props);
      console.log("here is the props:", this.props)
      console.log("here is the state:", this.state)
    }



  render(){
    return(
    <div>

    {Object.keys(this.props.users).map((user) => ( <LeaderboardBox user={user} key={user}/>))}

    </div>
    )
  }


}


function getTotal(user) {
  const answers = Object.keys(user.answers).length
  const asked = Object.keys(user.questions).length
  const total = answers + asked
  return (answers)
}



function mapStateToProps({users}){
  console.log("here is the mapState:", users)
  const userLeaderSorted = Object.keys(users)
  console.log("here is the question key:", userLeaderSorted)
  console.log(getTotal(users.tylermcginnis))


return({users})
}

export default connect(mapStateToProps)(Leaderboard)
