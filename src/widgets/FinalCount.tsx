import {questionStore} from "../features/questions/model";
import RestartTest from "../features/questions/components/RestartTest";


export default function FinalCount() {
  const count = questionStore(state => state.questionMarks).reduce((acc, value) => value ? acc + 1: acc, 0)
  return (<div>
    <p>Ваш результат: {count}</p>
    <RestartTest/>
  </div>)
}