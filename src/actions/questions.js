export const RECEIVED_QUESTIONS = 'RECEIVE_QUESTIONS'
 export function receiveQuestions (questions) {
  return {
    type: RECEIVED_QUESTIONS,
    questions,
  }
}
