import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

interface IProps {
  variants: string[]
  onChange: (id: number, answer: string[] ) => void
  questionId: number
}
export default function SingleAnswer({variants, onChange,questionId}: IProps) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Один вариант ответа</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={(data) => {
          onChange(questionId, data.target.value)
        }}
      >
        {variants.map(variant => {
          return <FormControlLabel key={variant} value={variant} control={<Radio />} label={variant} />
        })}

      </RadioGroup>
    </FormControl>
  )
}