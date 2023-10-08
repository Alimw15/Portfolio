import React from 'react'
import './main.css'
import cv from './images/cv.png'
import img1 from './images/html.svg'
import img2 from './images/css.svg'
import img3 from './images/js.svg'
import img4 from './images/react.svg'
import card1 from './images/card1.png'
import card2 from './images/card2.png'

const Main = () => {
  return (
    <main className='containerMain'>
        <div id='home' className='fadeIn main'>
            <div className="text">
                <h1>Hi, My name is Alim Wijaya</h1>
                <h2>Front End Developer</h2>
            </div>
            <div className='btn'>
                <a href="#">Download My CV <img src={cv} alt="" width={25} /></a>
            </div>
            <div class="mouse">
                <div class="mouse"></div>
            </div>
        </div>
        <div id='about' className='fadeIn about'>
            <div className='title'>
                <h1>About Me</h1>
            </div>
            <div className="content">
                <div className='slideInLeft text'>
                    <h1>Get To Know Me</h1>
                    <p>Hi everyone, I'm Alim WIjaya from Jakarta, Indonesia. <br />I am a vocational school student at SMK Letris Indonesia 02. <br /> I chose the IT major   because I like to explore the world of technology. <br /> Apart from coding I also like playing games, reading comics and listening to music.</p>
                </div>
                <div className='slideInRight skills'>
                    <h1>My Skills</h1>
                    <div className="skill--skill">
                        <img src={img1} alt="html" />
                        <img src={img2} alt="css" />
                        <img src={img3} alt="javascript" />
                        <img src={img4} alt="react js" />
                    </div>
                </div>
            </div>
        </div>
        <div id='projects' className="projects">
            <div className="fadeIn title">
                <h1>My Projects</h1>
            </div>
            <div className='content'>
                <div className="slideInLeft card">
                    <img src={card1} alt="" width="100%"/>
                    <div className='containerCard'>
                        <h4>Assignment from my school</h4>
                        <p>with react js, css</p>
                    </div>
                </div>
                <div className="slideInRight card">
                    <img src={card2} alt="" width="100%"/>
                    <div className='containerCard'>
                        <h4>imitates Apple's web design.</h4>
                        <p>with react js, css</p>
                    </div>
                </div>
            </div>
        </div>
        <div id='contact' className='fadeIn contactMe'>
            <div className='title'>
                <h1>Contact Me</h1>
                <h5>Get In Touch</h5>
            </div>
            <div className="containerForm">
                <div className="formField">
                    <label htmlFor="name">Name</label>
                    <input type="text" required placeholder='Enter Your Name'/>
                </div>
                <div className="formField">
                    <label htmlFor="email">Email</label>
                    <input type="text" required placeholder='Enter Your Email'/>
                </div>
                <div className="formField">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" required placeholder='Enter Your Message'></textarea>
                </div>
                <div className="btn">
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main