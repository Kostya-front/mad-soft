import useRestartTest from "../../../../shared/hooks/useRestartTest";
import {useTimerStore} from "../../../timer/model";
import {questionStore} from "../../model";


export default function RestartTest() {
  const refreshQuestions = useTimerStore(state => state.refreshTimerStore)
  const restartTimerStore = questionStore(state => state.refreshQuestionStore)

  function onClick() {
    refreshQuestions()
    restartTimerStore()
  }
  return <button onClick={onClick} className='btn btn-primary'>Попробовать снова</button>
}