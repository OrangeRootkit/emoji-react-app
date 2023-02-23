import React from 'react'
import s from './Card.module.scss'

export const Card = ({symbol, title, keywords}) => {


  return (
    <div className='home__grid-card'>
        {/* <p className='emoji'>${obj.symbol}</p>
        <p className='capture'>${obj.title}</p>
        <p className='card__text'>${keywords}</p> */}
        <p className={s.emoji}>{symbol}</p>
        <p className={s.capture}>{title}</p>
        <p className={s.card__text}>{keywords}</p>
    </div>
  )
}
