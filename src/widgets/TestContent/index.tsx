import GetQuestionMarker from "../../features/questions/components/GetQuestionMarker";
import SetAnswer from "../../features/questions/components/SwipeAnswer";
import GetQuestions from "../../features/questions/components/GetQuestions";
import styles from './index.module.scss'

export default function TestContent() {
  return (
    <section className={styles.section}>
      <GetQuestionMarker/>
      <GetQuestions/>
      <SetAnswer/>
    </section>
  )
}