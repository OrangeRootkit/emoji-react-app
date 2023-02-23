import React from 'react'
import s from './Footer.module.scss'

export const Footer = () => {
  return (
    <>
    <footer className={s.footer}>
        <div className={s.container}>
        <p className = {s.footer__text}>2022 © Made with love by me</p>
        </div>
    </footer>
    </>
  )
}
