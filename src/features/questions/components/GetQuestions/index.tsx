import {questionStore} from "../../model";
import {IQuestion} from "../../../../shared/types";
import SingleAnswer from "../../../../shared/ui/SingleAnswer";
import MultiAnswer from "../../../../shared/ui/MultiAnswer";
import ShortAnswer from "../../../../shared/ui/ShortAnswer";
import FullAnswer from "../../../../shared/ui/FullAnswer";
import styles from './index.module.scss'

export default function GetQuestions() {

  const questions: IQuestion[] = questionStore(state => state.questions)
  const questionIndex: number = questionStore(state => state.questionIndex)
  const chooseVariant = questionStore(state => state.chooseAnswer)


  const components = {
    'single':  <SingleAnswer
      variants={questions[questionIndex]?.variants}
      questionId={questions[questionIndex]?.id}
      onChange={chooseVariant}
    />,
    'multi': <MultiAnswer
      variants={questions[questionIndex]?.variants}

      questionId={questions[questionIndex]?.id}

      onChange={chooseVariant}/>,

    'short': <ShortAnswer questionId={questions[questionIndex]?.id} onChange={chooseVariant}/>,

    'full': <FullAnswer questionId={questions[questionIndex]?.id} onChange={chooseVariant}/>
  }

  function RenderComponent(type: string) {
    return components[type]
  }

  return (
    <div className={styles.content}>
      <h2>{questions[questionIndex].question}</h2>

      {RenderComponent(questions[questionIndex].typeAnswer)}
    </div>
  )
}