import { getInitialData,saveQuesions } from '../utils/api'
import { receiveUsers, AddQuestionUser } from '../actions/users'
import { receiveQuestions, addQuestion } from '../actions/questions'
import {setAuthUser} from '../actions/authorizedUser'

const AUTH_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthUser(AUTH_ID))
      })
  }
}

export function handleAddQuestion(question){
  return (dispatch, getState) => {
    const authedUser = question.authedUser
    //const timeStamp= Date.now()
    //console.log(timeStamp)
    return saveQuesions({
      optionOneText:question.optionOne, optionTwoText: question.optionTwo, author: authedUser,
    }).then(question => {

      dispatch(addQuestion(question))
        dispatch(AddQuestionUser(question))

    })
  }
}
