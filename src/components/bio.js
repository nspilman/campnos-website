import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
    padding:2rem;
    background-color:  rgb(168,143,178);
    width:20rem;
    margin:2rem;
`

const bio = (props) => {
    console.log(props)
    const { frontmatter } = props.bio
    return (
        <Wrapper>
            <Img className='bio-image' fluid={frontmatter.image.childImageSharp.fluid}/>
            <h1>{frontmatter.name}</h1>
            <h2>{frontmatter.title}</h2>
            <ul className="icons" style={{display:'flex', justifyContent:'center'}}>
                <li><a href={`https://twitter.com/${frontmatter.twitter}`} className="icon brands fa-twitter" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href={`https://www.instagram.com/${frontmatter.instagram}`} className="icon brands fa-instagram" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
        </Wrapper>
    )
}

export default bio;