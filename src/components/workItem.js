import * as React from 'react'
import Layout from './layout'
import { item, title, date, description, canonical } from './workItem.module.css'

const WorkItem = ({ node, children }) => {
  return (
    <Layout pageTitle="Work Post">
      <div className={item}>
        <h2>{node.frontmatter.title}</h2>
        <p><a href={node.frontmatter.canonical} target="_blank">{node.frontmatter.canonical}</a></p>
        <p>{children}</p>
      </div>
    </Layout>
  )
}

export default WorkItem