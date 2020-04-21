import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <React.Fragment>
      <div>Hello world</div>
      <h1>{data.allMarkdownRemark.totalCount}</h1>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <tr key={index}>
          <td>{node.frontmatter.title}</td>
          <td>{node.frontmatter.date}</td>
          <td>{node.excerpt}</td>
        </tr>
      ))}
    </React.Fragment>
  )
}

// Not 100% sure how this works behind the scenes but this a page query
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order:DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            screenshots
          }
          excerpt
        }
      }
    }
  }
`
