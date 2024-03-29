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
  footer
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={navWrapper}>
        <ul className={nav}>
          <li><Link className={navItem} to="/">manzanotree</Link></li>
          <li><Link className={navItem} to="/work">work</Link></li>
          <li><Link className={navItem} to="/about">about</Link></li>
        </ul>
      </nav>
      <div className={contentWrapper}>
        <div className={content}>{children}</div>
      </div>
      <footer className={footer}>
        Copyright {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout