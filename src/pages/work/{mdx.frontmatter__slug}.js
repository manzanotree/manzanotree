import * as React from "react"
import { graphql } from "gatsby"
import WorkItem from "../../components/workItem"

const WorkItemPage = ({ data, children }) => {
  return <WorkItem node={data.mdx}>{children}</WorkItem>
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "D MMMM YYYY")
        title
        canonical
      }
    }
  }
`

export default WorkItemPage