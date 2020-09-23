import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bio from "../components/bio"

const theCollective = (props) => {
  const bios = props.data.allFile.edges.map(edge => edge.node.childMarkdownRemark)
  return (
    <Layout>
    <SEO title="The Collective" />
    <h1>The CampNos Collective</h1>
    {bios.map(persion => {
    return <Bio bio={persion}/>})}
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
                    image {
                        childImageSharp {
                          fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                  }
                }
              }
            }
          }
        }
    `
