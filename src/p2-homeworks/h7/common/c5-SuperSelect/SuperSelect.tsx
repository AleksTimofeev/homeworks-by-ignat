import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
  value?: any
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: any[] = options ? [...options] : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value)
  }

  return (
    <select onChange={onChangeCallback} {...restProps}>
      {mappedOptions.map((item, i) => (
        <option selected={value === item} key={i}>{item}</option>
      ))}
    </select>
  )
}

export default SuperSelect
