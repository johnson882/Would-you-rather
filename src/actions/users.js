export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'
export const SAVE_QUESTION_ANSWER_USER = 'SAVE_QUESTION_ANSWER_USER'

 export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function AddQuestionUser (question) {
  return{
    type: ADD_QUESTION_USER,
    question
  }
}

export function save_question_answer_user({ authUser, id }){
  //console.log('Test save question answer user:', id, authUser,)
  return{
    type: SAVE_QUESTION_ANSWER_USER,
    authUser,
    id
  }
}
