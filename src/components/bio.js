import React from "react"
import Img from "gatsby-image"


const bio = (props) => {
    console.log(props)
    const { frontmatter } = props.bio
    return (
        <div className='bio'>
            <Img className='bio-image'
                fluid={frontmatter.image.childImageSharp.fluid}></Img>
            <h1>{frontmatter.name}</h1>
            <ul className="icons">
                <li><a href={`https://twitter.com/${frontmatter.twitter}`} className="icon brands fa-twitter" target="_blank" noreferrer>Twitter</a></li>
                <li><a href={`https://www.instagram.com/${frontmatter.instagram}`} className="icon brands fa-instagram" target="_blank" noreferrer>Instagram</a></li>
            </ul>
        </div>
    )
}

export default bio;