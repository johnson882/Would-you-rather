import {RECEIVED_QUESTIONS, SAVE_QUESTION_ANSWER, ADD_QUESTION} from "../actions/questions"

export default function questions(state = {}, action){
  console.log("action: ", action)
  switch(action.type){
    case RECEIVED_QUESTIONS:
      return{
      ...state,
      ...action.questions
      }
      case SAVE_QUESTION_ANSWER:
      return{
        ...state,
        [action.id]:
        {
          ...state[action.id],
          [action.vote]:
          {

          votes: state[action.id][action.vote].votes.concat(action.authUser)

        }
        }

      }

    default: return state
  }
}
