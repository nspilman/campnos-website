import React from "react"
import Img , { GatsbyImageFluidProps }from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
    padding:2rem;
    background-color:  rgb(168,143,178);
    width:20rem;
    margin:2rem;
`

interface Bio { 
    name: String,
    title: String,
    image: {
        childImageSharp: GatsbyImageFluidProps
    },
    twitter:String,
    instagram: String,
}

interface Props {
    bio : Bio
}

const bio = ({ bio } : Props) => {
    const { name, title, twitter, instagram, image } = bio
    return (
        <Wrapper>
            <Img className='bio-image' fluid={image.childImageSharp.fluid}/>
            <h1> {name} </h1>
            <h2> {title} </h2>
            <ul className="icons" style={{display:'flex', justifyContent:'center'}}>
                <li><a href={`https://twitter.com/${twitter}`} className="icon brands fa-twitter" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href={`https://www.instagram.com/${instagram}`} className="icon brands fa-instagram" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
        </Wrapper>
    )
}

export default bio;