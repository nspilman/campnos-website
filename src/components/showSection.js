import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
flex-direction: row;
display:flex;
align-items: center;
font-size: 1.5rem;
border-top: 3px solid rgb(168,143,178);
padding: 2rem 0;
margin: 0 2rem;
width:100%;
@media (max-width: 768px) {
    flex-direction: column;
    margin-top:3rem;
    padding-top:3rem;
}
`

const ContentBoxWrapper = styled.div`
    width:20rem;
    margin:2rem;
    color:white;
`

const LogoContainer = styled.div`
width:15rem;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
color:rgb(168,143,178);
`


const showSection = (props) => {
    const logo = props.logo.childImageSharp.fluid;
    const link = props.link;
    return (
        <Wrapper>
            <a href={link}>
                <LogoContainer>
                    <Img fluid={logo} />
                    <p>{props.name}</p>
                </LogoContainer>
            </a>
            {props.episodes.map(episode => {
                return (
                    <ContentBoxWrapper
                        key={episode.frontmatter.title}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: episode.html }}
                        />
                        <p>{episode.frontmatter.title}</p>
                    </ContentBoxWrapper>
                )
            })}
        </Wrapper>
    )
}

export default showSection