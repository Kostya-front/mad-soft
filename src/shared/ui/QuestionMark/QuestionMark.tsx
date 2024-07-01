import styles from './question-mark.module.scss'
import clsx from "clsx";

interface IProps {
  isSelected: boolean
  isCorrect: boolean
  value: null | boolean
}
export default function QuestionMark({isSelected, value}: IProps ) {
  return <span className={clsx({
    [styles.mark]: true,
    [styles.markSelect]: isSelected,
    [styles.markCorrect]: value,
    [styles.markError]: value === false

  })}></span>
}