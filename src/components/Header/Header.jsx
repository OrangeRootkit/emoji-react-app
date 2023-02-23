import React from 'react'
import s from './Header.module.scss'

export const Header = ({children}) => {

  return (
    <>
    <header className={s.header}>
        <div className={s.container} >
        <h1 className={s.header__head}>Emoji Finder</h1>
        <p className={s.header__text}>Find emoji by keywords</p>
        {children}
        </div>
    </header>
    </>
  )
}
