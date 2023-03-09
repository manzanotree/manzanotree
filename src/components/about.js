import * as React from 'react'
import { container, name, caption } from './about.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <div className={container}>
      <StaticImage 
        src="../images/avatar.jpg" 
        alt="Handsome headshot of Mike Manzano" 
        placeholder="blurred"
        style={{ 
          objectFit: 'cover',
          borderRadius: '50%',
          height: '15em',
          width: '15em',
        }}
      />
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