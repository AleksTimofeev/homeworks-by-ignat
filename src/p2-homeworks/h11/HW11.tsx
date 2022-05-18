import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
  const min = 10
  const max = 90
  const [value1, setValue1] = useState(min)
  const [value2, setValue2] = useState(max)

  const handleChangeDoubleRange = (val: Array<number>) => {
    setValue1(val[0])
    setValue2(val[1])
  }

  return (
    <div>
      <hr/>
      homeworks 11

      <div>
        <span>{value1}</span>
        <SuperRange
          onChangeRange={(value: number) => setValue1(value)}
          value={value1}
        />
      </div>

      <div>
        <span>{value1}</span>
        <SuperDoubleRange
          value={[value1, value2]}
          onChangeRange={handleChangeDoubleRange}
          step={10}
          max={max}
          min={min}
        />
        <span>{value2}</span>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
