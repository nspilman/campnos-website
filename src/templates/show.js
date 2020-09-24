import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const content = (props) => {
  console.log(props)
  const { title, description } = props.pageContext;
  const episodes = props.data.episodes.edges.map(edge => edge.node);
  const logo = props.data.show.edges[0].node.frontmatter.logo.childImageSharp.fluid;
  // const post = data.markdownRemark
  return (
    <Layout>
      <div id="show-overview">
        <div id="show-info">
          <Img className="show-page-logo" fluid={logo}></Img>
        <h1 id="show-title">
          {title}
        </h1>
        <p>{description}</p>
        </div>
        <div id="show-episodes-wrapper">
        <h1
						style={{ color: 'rgb(168,143,178)' }}>Episodes</h1>
        <div id="episodes">
          {episodes.map(
            episode => {
              return (
                <div
                  key={episode.frontmatter.title}
                  className="episode-wrapper"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: episode.html }}
                  />
                  <p>{episode.frontmatter.title}</p>
                  <p>{episode.frontmatter.description}</p>
                </div>
              )
            }
          )}
        </div>
        </div>
      </div>
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