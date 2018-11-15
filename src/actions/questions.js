export const RECIEVED_QUESTIONS = 'RECEIVE_QUESTIONS'
 export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
