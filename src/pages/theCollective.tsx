import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImageFluidProps }from "gatsby-image"

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

interface AllFile {
  edges: Edge[]
}

interface Edge {
  node: Node
}

interface Node {
  childMarkdownRemark : {
    frontmatter: BioFrontmatter
  }
}

interface BioFrontmatter {
  name: string,
  title: string,
  image: {
      childImageSharp: GatsbyImageFluidProps
  },
  twitter:string,
  instagram: string,
}

interface Props {
  data : {
    allFile: AllFile
  }
}

const theCollective = ({ data } : Props) => {
  const bios = data.allFile.edges.map(edge => edge.node.childMarkdownRemark)
  return (
    <Layout>
      <SEO title="The Collective" />
      <Wrapper>
        <h1>The CampNos Collective</h1>
        <Bios>
          {bios.map(person => {
            return <Bio
              key={person.frontmatter.name}
              bio={person.frontmatter} />
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
