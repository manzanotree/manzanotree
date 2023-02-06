import * as React from 'react'
import { graphql } from 'gatsby'
import WorkItem from '../../components/workItem'

const WorkItemPage = ({ data, children }) => {
  const node = data.mdx
  return (
    <WorkItem node={node} children={children} />
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "D MMMM YYYY")
        title
        canonical
      }
      excerpt
    }
  }
`

export default WorkItemPage