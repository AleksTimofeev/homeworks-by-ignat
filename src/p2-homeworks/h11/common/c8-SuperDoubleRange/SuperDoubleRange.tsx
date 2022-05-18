import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
  onChangeRange: (value: number[]) => void
  value: Array<number>
  min?: number
  max?: number
  step?: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange, value,
    min, max, step
  }
) => {
  // сделать самому, можно подключать библиотеки


  const handleChange = (event: Event, newValue: number | number[]) => {

    onChangeRange(newValue as number[])
  };


  return (
    <>
      DoubleRange
      <div>
        <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={step || 1}
          min={min || 0}
          max={max || 100}
        />
          </Box>
      </div>
    </>
  )
}

export default SuperDoubleRange
