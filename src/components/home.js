import * as React from 'react'
import {
  container,
  blurb,
  item,
  social
} from './home.module.css'

const Home = () => {
  return (
    <div className={container}>
      <p className={`${item} ${blurb}`}>Hi, I'm Mike Manzano and welcome to my site! 
        I'm a software engineer, dabbler, 
        and junior adventurer based in New York City. 
        Here you can find stuff that I'm working on.
      </p>
      <p className={`${item} ${social}`}>
        <a href="https://github.com/manzanotree" target="_blank">github</a>
      </p>
      <p className={`${item} ${social}`}>
        <a href="https://www.linkedin.com/in/mikemanz/" target="_blank">linkedin</a>
      </p>
    </div>
  )
}

export default Home