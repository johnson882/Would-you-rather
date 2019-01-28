import { RECEIVE_USERS
} from "../actions/users"
//import {AddQuestionUser} from '../actions/questions'


export default function users (state = {}, action){
  switch(action.type){
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case 'ADD_QUESTION_USER':
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions:
            [...state[action.question.author].questions, action.question.id]
        }
      }
      case 'SAVE_QUESTION_ANSWER_USER':
      return{
        ...state,
        [action.authUser]: {
          ...state[action.authUser], answers: {...state[action.authUser].answers,[action.id]:action.vote}
        }
      }
      default :
      return state
  }

}
