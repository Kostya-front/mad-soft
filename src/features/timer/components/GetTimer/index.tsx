import {useTimerStore} from "../../model";
import {calculateTIme} from "../../../../shared/tools/calculateTIme";
import styles from './index.module.scss'

export default function Timer() {
  const timer = useTimerStore(state => state.timer)
  return <div className={styles.timer}>{calculateTIme(timer)}</div>
}