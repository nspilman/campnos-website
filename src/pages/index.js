import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../assets/images/logo.png"
import ShowSection from '../components/showSection'

const IndexPage = (props) => {
	const allFiles = props.data.allFile.edges.map(edge => edge.node)
	const shows = allFiles.filter(node => node.sourceInstanceName === 'shows')
		.map(show => show.childMarkdownRemark)
	const episodes = allFiles.filter(node => node.sourceInstanceName === 'episodes')
		.map(episodes => episodes.childMarkdownRemark)
	return (
		<Layout>
			<SEO title="Home" />
			<div id="wrapper">
				<div id="left">
				<section id="main" style={{ backgroundColor: 'rgb(168,143,178)', color: 'white' }}>
					<header>
						<span className="avatar">
							<img src={logo} style={{ height: '300px' }} alt="" /></span>
						<h1>Camp Nos Collective</h1>
						<p>A collective of artist, beat makers, designers, comics, and creatives</p>
					</header>
					<div id="theCollective">
					<Link to="/theCollective">
					<button>
						Who We Are
					</button>
					</Link>
				</div>
					<footer>
						<ul className="icons">
							<li><a href="https://twitter.com/CampNos" className="icon brands fa-twitter">Twitter</a></li>
							<li><a href="https://www.instagram.com/campnosmedia/" className="icon brands fa-instagram">Instagram</a></li>
							<li><a href="https://www.youtube.com/channel/UCUMITF9_Ry63dg7dC6v1TyA?sub_confirmation=1" className="icon brands fa-youtube">YouTube</a></li>
						</ul>
					</footer>
				</section>
				</div>
				<section id="content"
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						width: '100%',
						backgroundColor: 'rgb(0,0,0,.5)',
						marginTop: '2rem',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '2rem 0',
					}}
				>
					<h1
						style={{ color: 'rgb(168,143,178)' }}>Shows</h1>
					{shows.map(show => {
						const frontmatter = show.frontmatter;
						const link = show.fields.slug;
						const associatedEpisodes = episodes.filter(episode => episode.frontmatter.show === frontmatter.title)
						return <ShowSection
							key={frontmatter.title}
							name={frontmatter.title}
							logo={frontmatter.logo}
							link={link}
							episodes={associatedEpisodes}
						/>
					})}


				</section>
				{/* <!-- Footer --> */}
			</div>
			<footer id="footer">
				<ul className="copyright">
					<li>&copy; Camp Nos Collective</li>
				</ul>
			</footer>
		</Layout>
	)
}

export default IndexPage
export const pageQuery = graphql
	`
    query
    {
        allFile(filter: {sourceInstanceName: {in: ["shows","episodes"]}}) {
            edges {
              node {
                id
                sourceInstanceName
                childMarkdownRemark {
				html
				fields{
					slug
				}
                frontmatter {
                    show
                    description
					title
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
      }
    `