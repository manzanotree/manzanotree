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
        I like to create things, so I'm fortunate to write code for a living. 
        I'm an avid motorcyclist, I've gone in and out 
        of DJing over the past 15 years, and have recently taken up bass guitar. 
        I like to spend some of my spare time collecting records and 
        replicating my ideal NY pizza slice.
      </p>

      <p>A bit more about this site.</p>

      <p>This is a Gatsby-powered React app hosted on GitHub Pages. It's easy to maintain and minimalist by design.</p>
    </div>
  )
}

export default About