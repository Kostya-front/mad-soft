import {create} from "zustand";
import {testDb} from "../../../shared/db";
import {IQuestion} from "../../../shared/types";
import {localstorage} from "../../../shared/tools/localstorage";

export const questionStore = create( (set, get) => ({
  questionIndex: localstorage.getItem('questionIndex') || 0,
  questions: [...JSON.parse(JSON.stringify(testDb))] as IQuestion [],
  questionMarks:  localstorage.getItem('questionMarks') || Array(testDb.length).fill(null),
  isFinished: false,

  refreshQuestionStore: () => set((state) => {
    return {
      isFinished: false,
      questionIndex: 0,
      questions: [...JSON.parse(JSON.stringify(testDb))],
      questionMarks: Array(testDb.length).fill(null)
    }
  }),
  checkCorrectAnswer: () => set(state => {
    const currentIndex = state.questionIndex
    const currentQuestion =  state.questions[currentIndex]
    const newQuestionMarks = [...state.questionMarks]
    newQuestionMarks[currentIndex] = currentQuestion.userAnswer.every(
      (answer ) => currentQuestion.rightAnswer.includes(answer) && currentQuestion.rightAnswer.length === currentQuestion.userAnswer.length)

    localstorage.setItem('questionMarks',newQuestionMarks )
    return {questionMarks: newQuestionMarks}
  }),

  nextQuestion: () => set((state) => {
    state.checkCorrectAnswer()
    if( state.questionIndex >= testDb.length - 1 ) {
      return {isFinished: true}
    } else {
      localstorage.setItem('questionIndex',state.questionIndex + 1)
      return {
        questionIndex: state.questionIndex + 1,
      }
    }
  }),
  chooseAnswer: (id: number, answer: string ) => set((state) => {
    return {questions: state.questions.map(question => {
      if( question.id === id) {
        if(question.typeAnswer === 'multi') {
          question.userAnswer = question.userAnswer.includes(answer) ? question.userAnswer.filter(item => item !== answer) : [...question.userAnswer, answer]
        }else {
          question.userAnswer = [answer]
        }
      }
      return question
      })}
  })
}))