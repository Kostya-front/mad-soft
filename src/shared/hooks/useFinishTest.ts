import {useTimerStore} from "../../features/timer/model";
import {questionStore} from "../../features/questions/model";
import {useEffect} from "react";



export default function useFinishTest() {
  const finishTime = useTimerStore(state =>  state.isFinished)
  const timer = useTimerStore(state => state.startTimer)
  const finishQuestion = questionStore(state => state.isFinished)

  const isFinished = finishTime || finishQuestion
  useEffect(() => {
    if(isFinished) {
      clearInterval(timer)
      localStorage.clear()
    }
  },[finishTime, finishQuestion])
  return isFinished
}