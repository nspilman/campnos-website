import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bio from "../components/bio"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Bios = styled.div`
  display: flex;
  flex-direction: row;
`

const theCollective = (props) => {
  const bios = props.data.allFile.edges.map(edge => edge.node.childMarkdownRemark)
  return (
    <Layout>
      <SEO title="The Collective" />
      <Wrapper>
        <h1>The CampNos Collective</h1>
        <Bios>
          {bios.map(person => {
            return <Bio
              key={person.frontmatter.name}
              bio={person} />
          })}
        </Bios>
      </Wrapper>
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
