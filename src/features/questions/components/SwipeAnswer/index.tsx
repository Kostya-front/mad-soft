import {questionStore} from "../../model";


export default function SwipeAnswer() {
  const onClick = questionStore(state => state.nextQuestion)
  const questions = questionStore(state => state.questions)
  const questionIndex = questionStore(state => state.questionIndex)

  const isDisabled = questions[questionIndex].userAnswer.length
  return <button className='btn btn-primary' disabled={!isDisabled} onClick={onClick}>{JSON.stringify(questions[questionIndex])}</button>
}