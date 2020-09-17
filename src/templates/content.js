import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const content = (props) => {
  const { title } = props.pageContext
  const episodes = props.data.allMarkdownRemark.edges.map(edge => edge.node)
  // const post = data.markdownRemark
  return (
    <Layout>
      <h1>
        {title}
      </h1>
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
    </Layout>
  )
}

export default content

export const pageQuery = graphql
  `
    query($title: String)
    {
        allMarkdownRemark(
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
      }
    `