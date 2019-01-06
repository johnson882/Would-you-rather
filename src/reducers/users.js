import { RECEIVE_USERS, SAVE_QUESTION_ANSWER_USER
} from "../actions/users"
//import {AddQuestionUser} from '../actions/questions'


export default function users (state = {}, action){
    console.log(action.type)
  switch(action.type){
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case 'ADD_QUESTION_USER':
    console.log("action:", action.question.id)
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions:
            [...state[action.question.author].questions, action.question.id]
        }


      }
      case 'SAVE_QUESTION_ANSWER_USER':
      return{}


      default :
      return state
  }

}
