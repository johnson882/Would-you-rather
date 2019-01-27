import React, {Component} from 'react'
import { connect } from 'react-redux'

import LeaderboardBox from './LeaderboardBox'

class Leaderboard extends Component{
  constructor(props) {
      super(props);
      console.log("here is the props:", this.props)
      //console.log("here is the state:", this.state)
    }



  render(){


    return(
    <div>

    {
      this.props.usersArray.map((user) => ( <LeaderboardBox user={user[0]} question = {user[1]} answer = {user[2]} total={user[3]}key={user[0]}/>))
      //Object.keys(this.props.use).map((user) => ( <LeaderboardBox user={user} key={user}/>))
  }

    </div>
    )
  }


}

function Comparator(a, b) {
if (a[3] > b[3]) return -1;
if (a[3] < b[3]) return 1;
return 0;
}

function getTotal(user) {
  const answers = Object.keys(user).length
  //const asked = Object.keys(user.questions).length
  const total = answers
  return (answers)
}



function mapStateToProps({users}){

  const usersArray = []

  Object.entries(users).forEach(
    ([key, value]) => {

      const questions = value.questions.length
      const answers = getTotal(value.answers)
      const total = questions + answers;


    var arr = []

    arr = [key, questions, answers, total]
    usersArray.push(arr)

}
);

usersArray.sort(Comparator)
return({usersArray})
}

export default connect(mapStateToProps)(Leaderboard)
