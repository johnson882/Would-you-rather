import React, { Component } from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';

class Dashboard extends Component {
  render() {
    console.log(this.props.questionIds)
const tabStyles = {

 border: "none",
 padding: 20,
 marginRight:5,
 backgroundColor:"grey",
  cursor: "pointer",
  display:"inline-block",
}

    const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
    return(
      <div style={styles} >

        <Tabs>
            <TabList style={tabStyles}>
              <Tab>Unanswered Questions</Tab>
              <Tab>Answered Questions</Tab>
            </TabList>
              <TabPanel>
                <ul className='dashboard-list'>
                {
                  this.props.unanswered.map((id) => (
                 <li key={id}>
                 <Question id={id} />
                 </li>
                ))}
                </ul>
             </TabPanel>
             <TabPanel>
               <ul className='dashboard-list'>
             {
               this.props.answered.map((id) => (
              <li key={id}>
              <Question id={id} />
              </li>
             ))}
                </ul>

              </TabPanel>





        </Tabs>
      </div>
    )
  }
}


function mapStateToProps ({questions, authUser}){
  console.log("questions:", questions)
 const answered =  Object.keys(questions).filter(e => questions[e].optionOne.votes.includes(authUser)||
  questions[e].optionTwo.votes.includes(authUser)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  console.log("questions after: filter", questions)

  const unanswered = Object.keys(questions).filter(e => !answered.includes(e)).sort((a,b) => questions[b].timestamp
  - questions[a].timestamp)

   console.log(unanswered)
  return {
     answered,
    unanswered

  }

}

export default connect(mapStateToProps)(Dashboard)
