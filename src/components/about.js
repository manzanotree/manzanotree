import * as React from 'react'
import { container, avatarContainer, name, caption } from './about.module.css'
import avatar from '../images/avatar.jpg'

const About = () => {
  return (
    <div className={container}>
      <img src={avatar} className={avatarContainer} alt="Headshot of Mike Manzano" />
      <p className={name}>Mike Manzano</p>
      <p className={caption}>Software engineer & hot chocolate aficionado</p>
      
      <p>
        Hi, I'm Mike Manzano and I like to create things. I write code for a living, 
        but I've dabbled as a DJ, rugby player, and motorcyclist. Bass guitar is up next. 
        I enjoy traveling to new places and I hope to get into mountain climbing soon. 
      </p>
    </div>
  )
}

export default About