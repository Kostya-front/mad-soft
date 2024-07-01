import {TextField} from "@mui/material";


interface IProps {
  onChange: (id: number, answer: string[] ) => void
  questionId: number
}

export default function ShortAnswer({onChange, questionId}: IProps) {
  return <TextField  onChange={(data) => onChange(questionId, data.target.value.toLowerCase())} id="filled-basic" label="Ответ одним словом" variant="filled" />
}