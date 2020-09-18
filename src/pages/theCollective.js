import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const theCollective = (props) => {
  console.log(props.data)
  return (
    <Layout>
    <SEO title="The Collective" />
    <h1>The CampNos Collective</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default theCollective
export const pageQuery = graphql
`
      {
        allFile(filter: {sourceInstanceName: {eq: "bios"}}) {
            edges {
              node {
                id
                sourceInstanceName
                childMarkdownRemark {
                  html
                  frontmatter {
                    name
                    title
                    twitter
                    instagram
                  }
                }
              }
            }
          }
      }
    `
