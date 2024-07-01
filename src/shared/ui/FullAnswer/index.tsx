import {  TextField} from "@mui/material";

interface IProps {
  onChange: (id: number, answer: string[] ) => void
  questionId: number
}

export default function FullAnswer({onChange, questionId}:IProps) {
  return <TextField onChange={(data) => onChange(questionId, data.target.value.toLowerCase())} id="filled-basic" label="Полный ответ" variant="outlined" />
}