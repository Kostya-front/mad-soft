import TestContent from "../../widgets/TestContent";
import FinalCount from "../../widgets/FinalCount";
import Timer from "../../features/timer/components/GetTimer";
import useFinishTest from "../../shared/hooks/useFinishTest";
import styles from './index.module.scss'

export default function Home() {

  //
  const isFinished = useFinishTest()
  if(isFinished) {
    return <FinalCount/>
  }
  return (
    <div className={styles.page}>
      <h1>Main test</h1>
      <Timer/>
      <TestContent/>
    </div>
  )
}