import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {handleChangeAuth} from '../actions/shared'

class Loggout extends Component{


  componentDidMount = ()  =>{

        const {dispatch} = this.props
        dispatch(handleChangeAuth(
         null
        ))
    }


    render(){

    return(
      <div>

<Redirect to='/' />

      </div>
    )
  }
}

function mapStateToProps({authUser}){
return({authUser:null})
}
export default connect(mapStateToProps)(Loggout)
