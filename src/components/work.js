import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { container, list, item } from './work.module.css'

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
          }
          id
        }
      }
    }
  `)

  return (
    <div className={container}>
      <ul className={list}>
        {
          data.allMdx.nodes.map((node) => {
            return <li key={node.id} className={item}><Link className="" to={`/work/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

export default Work