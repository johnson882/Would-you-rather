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

    {//Object.keys(this.props.use).map((user) => ( <LeaderboardBox user={user} key={user}/>))
  }

    </div>
    )
  }


}


function getTotal(user) {
  const answers = Object.keys(user).length
  //const asked = Object.keys(user.questions).length
  const total = answers
  return (answers)
}



function mapStateToProps({users}){
  console.log("here is the mapState:", users)
  const newObject  = {}
  const newObjectofObject = {}

  Object.entries(users).forEach(
    ([key, value]) => {


    let questions = value.questions.length
    let answers = getTotal(value.answers)
    let total = questions + answers;

    newObjectofObject[key] = key
    var arr = []
    arr = [questions, answers, total]
    newObjectofObject[key]= arr
  //  newObjectofObject["answers"] = answers
    //newObjectofObject["total"] = questions + answers
    console.log(newObjectofObject)

  //  newObject["hi"] =  hi
}
);
console.log("newObject: ",newObject)
  //console.log(newObject)
//  const userLead = Object.keys(users)
  //console.log("here is the question key:", userLead)
  //console.log(getTotal(users.tylermcginnis))


return({newObjectofObject})
}

export default connect(mapStateToProps)(Leaderboard)
