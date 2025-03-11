import * as React from 'react'
import { Link } from 'gatsby'
import './global.css'
import {
  container,
  navWrapper,
  nav,
  navItem,
  contentWrapper,
  content,
  contentMusic,
  footer
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  let contentClass = content
  if (pageTitle === 'Music') {
    contentClass = contentMusic
  }
  return (
    <div className={container}>
      <nav className={navWrapper}>
        <ul className={nav}>
          <li><Link className={navItem} to="/">manzanotree</Link></li>
          <li><Link className={navItem} to="/work">work</Link></li>
          <li><Link className={navItem} to="/music">music</Link></li>
          <li><Link className={navItem} to="/about">about</Link></li>
        </ul>
      </nav>
      <div className={contentWrapper}>
        <div className={contentClass}>{children}</div>
      </div>
      <footer className={footer}>
        Copyright {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout