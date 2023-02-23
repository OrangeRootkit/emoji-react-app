import React from 'react'
import s from './Input.module.scss'

export const Input = ({inputValue, changeInput}) => {
  return (
    <input onChange={(e)=>changeInput(e)} className={s.header__input} value={inputValue} placeholder='enter keywords'/>
  )
}
