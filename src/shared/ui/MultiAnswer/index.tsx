import {Checkbox, FormControlLabel, FormGroup } from "@mui/material";

interface IProps {
  variants: string[]
  onChange: (id: number, answer: string[] ) => void
  questionId: number
}
export default function MultiAnswer({variants, onChange,questionId}: IProps) {
  return (
    <FormGroup>
      {variants.map(variant => {
        return  <FormControlLabel
          key={variant}
          control={
            <Checkbox name={variant}  onChange={(data) => {
              onChange(questionId, data.target.name)
            }}/>}
          label={variant}
        />
      })}

    </FormGroup>
)
}