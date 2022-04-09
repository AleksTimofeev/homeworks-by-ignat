import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import styles from './HW6.module.css'

function HW6() {
  const [value, setValue] = useState<string>('')
  const [inputFocus, setInputFocus] = useState(false)

  const save = () => {
    if (value.trim() && value !=='enter text...') {
      saveState<string>('editable-span-value', value)
    }
  }
  const callbackOnFocus = () => {
    setInputFocus(true)

  }
  const callbackOnBlur = () => {
    setInputFocus(false)
  }

  const restore = () => {
    setValue(restoreState('editable-span-value', 'enter text...'))
  }

  return (
    <div>
      <hr/>
      homeworks 6
      <div className={styles.wrapper}>
        <>
          <SuperEditableSpan
            value={value}
            onChangeText={setValue}
            onEnter={callbackOnBlur}
            onFocus={callbackOnFocus}
            onBlur={callbackOnBlur}
            spanProps={{children: value ? undefined : 'enter text...'}}
          />
        </>
        <div className={styles.buttons}>
        {inputFocus ?
          <SuperButton onClick={callbackOnBlur}>Add</SuperButton> :
          <SuperButton disabled={!Boolean(value)} onClick={save}>save</SuperButton>
        }
        <SuperButton onClick={restore}>restore</SuperButton>
      </div>
      </div>
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
      <hr/>
    </div>
  )
}

export default HW6
