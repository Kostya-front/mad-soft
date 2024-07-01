import {useTimerStore} from "../../features/timer/model";
import {questionStore} from "../../features/questions/model";


export default function useRestartTest() {
  const refreshQuestions = useTimerStore(state => state.refreshQuestionStore)
  const restartTimerStore = questionStore(state => state.refreshTimerStore)

  refreshQuestions()
  restartTimerStore()
}