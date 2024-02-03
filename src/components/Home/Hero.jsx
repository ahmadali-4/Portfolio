import React from 'react'
import "./hero.scss"

export const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="wrapper">
        <div className="title">
          <h1>Hey, I'm Ahmad.</h1>
        </div>
        <div className="sub-title">
        <h3>I'm a <span>Full Stack Developer</span></h3>
        </div>
        <p>I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!</p>
        <div className="button">
          <button>Contact me</button>
        </div>
      </div>
    </div>
  )
}
