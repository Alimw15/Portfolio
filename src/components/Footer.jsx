import React from 'react'
import './footer.css'
import github from './images/github.svg'
import ig from './images/ig.svg'
import wa from './images/wa.svg'

const Footer = () => {
  return (
    <footer className='containerFooter'>
      <div className="footer">
        <div className='text'>
          © Copyright 2023. Made by Alim Wijaya
        </div>
        <div className="social">
          <a href="https://github.com/Alimw15"><img src={github} alt="" /></a>
          <a href="https://www.instagram.com/alimw15/"><img src={ig} alt="" /></a>
          <a href="https://wa.me/6281296626322?text=Hi alim, nice to meet you"><img src={wa} alt="" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer