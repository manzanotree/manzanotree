import * as React from 'react'
import {
  container,
  social
} from './home.module.css'

const Home = () => {
  return (
    <div className={container}>
      <p>
        Hi, I'm Mike Manzano and welcome to my site! 
        I'm a software engineer, dabbler, and wannabe pizzaiolo  
        from New York currently based in London. 
        Here you can find stuff that I'm working on.
      </p>
      <p className={social}>
        <a href="https://github.com/manzanotree" target="_blank">github</a>
      </p>
      <p className={social}>
        <a href="https://www.linkedin.com/in/mikemanz/" target="_blank">linkedin</a>
      </p>
    </div>
  )
}

export default Home