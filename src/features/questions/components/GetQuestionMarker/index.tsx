import {questionStore} from "../../model";
import {IQuestion} from "../../../../shared/types";
import QuestionMark from "../../../../shared/ui/QuestionMark/QuestionMark";
import styles from './index.module.scss'

export default function  GetQuestionMarker() {

  const questionsMarks: null [] | boolean [] = questionStore((state) => state.questionMarks)
  const questionIndex = questionStore((state) => state.questionIndex)
  return (
    <div className={styles.marks}>
    {questionsMarks?.map((item, index) => {
      return <QuestionMark key={index} isSelected={questionIndex  === index} value={item}/>
    })}

  </div>)
}