import React from 'react'
import s from './Main.module.scss'

export const Main = ({children}) => {
  return (
    <>
        <main>
            <div className={s.container}>
                <div className={s.home__wrapper}>
                    <div className={s.home__grid}>
                      {children}
                    </div>
                </div>
            </div>
        </main>
        <div className={s.home__line}></div>
    </>
  )
}
