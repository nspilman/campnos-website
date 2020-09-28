import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from "../components/layout"

const ShowOverview = styled.div`
  background-color: rgb(0,0,0,.5);
  margin:2rem;
`

const Episode = styled.div`
  padding:2rem;
  margin:1rem;
  background-color: rgb(168,143,178);
`

const ShowInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding:3rem;
    margin:3rem;
    color:white;
    border-bottom:1px solid rgb(168,143,178);
`

const Episodes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const EpisodeWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

const content = (props) => {
  const { title, description } = props.pageContext;
  const episodes = props.data.episodes.edges.map(edge => edge.node);
  const logo = props.data.show.edges[0].node.frontmatter.logo.childImageSharp.fluid;
  return (
    <Layout>
      <ShowOverview>
        <ShowInfo>
          <Img className="show-page-logo" fluid={logo}></Img>
          <h1 id="show-title">
            {title}
          </h1>
          <p>{description}</p>
        </ShowInfo>
        <EpisodeWrapper>
          <h1
            style={{ color: 'rgb(168,143,178)' }}>Episodes</h1>
          <Episodes>
            {episodes.map(
              episode => {
                return (
                  <Episode
                    key={episode.frontmatter.title}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: episode.html }}
                    />
                    <p>{episode.frontmatter.title}</p>
                    <p>{episode.frontmatter.description}</p>
                  </Episode>
                )
              }
            )}
          </Episodes>
        </EpisodeWrapper>
      </ShowOverview>
    </Layout>
  )
}

export default content

export const pageQuery = graphql
  `
    query($title: String)
    {
        episodes: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {frontmatter: {show: {eq: $title}}}
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                title
              }
            }
          }
        }
        show: allMarkdownRemark(
          filter: {frontmatter: {title: {eq: $title}}}
        )
        {
          edges {
            node {
              id
              frontmatter {
                logo {
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
    `