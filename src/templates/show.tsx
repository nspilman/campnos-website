import React from "react"
import { graphql } from "gatsby"
import Img , { GatsbyImageFluidProps }from "gatsby-image"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Youtube from "../components/youtube"

const ShowOverview = styled.div`
  background-color: rgb(0,0,0,.5);
  margin:2rem;
`

const Episode = styled.div`
  padding:2rem;
  margin:1rem;
  color:white;
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


interface EpisodeFrontmatter{
  title: string,
  youtube: string,
}

interface allEpisodeMarkdownRemark{
  edges: Edge[]
}

interface allShowMarkdownRemark{
  edges: ShowEdge[]
}

interface Edge{
  node: EpisodeNode
}

interface ShowEdge{
  node: ShowNode
}

interface EpisodeNode{
  id: number,
  html: string,
  frontmatter: EpisodeFrontmatter
}

interface ShowFrontMatter{
  logo: {
    childImageSharp : GatsbyImageFluidProps
},
link : string,
name: string,
}

interface ShowNode{
  id: number,
  html: string,
  frontmatter: ShowFrontMatter
}

interface PageContext{
  title: string,
  description: string,
}

interface Props {
  pageContext : PageContext
  data: {
    episodes: allEpisodeMarkdownRemark,
    show: allShowMarkdownRemark,
  }

}

const content = (props : Props) => {
  const { title, description } = props.pageContext;
  const episodes = props.data.episodes.edges.map(edge => edge.node);
  const logo = props.data.show.edges[0].node.frontmatter.logo.childImageSharp.fluid;
  return (
    <Layout>
      <SEO title = {`${title} | Camp Nos Collective`}/>
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
                    <Youtube videoId={episode.frontmatter.youtube}/>
                    <div
                      dangerouslySetInnerHTML={{ __html: episode.html }}
                    />
                    <p>{episode.frontmatter.title}</p>
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
                youtube
                description
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