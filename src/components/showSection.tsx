import React from "react"
import Img , { GatsbyImageFluidProps }from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
flex-direction: row;
display:flex;
align-items: center;
border-top: 3px solid rgb(168,143,178);
padding: 2rem 0;
margin: 0 2rem;
width:100%;
@media (max-width: 768px) {
    flex-direction: column;
    margin:1.5rem 0;
    padding:1.5rem 0;
}
`

const ContentBoxWrapper = styled.div`
    width:15rem;
    margin:0 2rem;
    color:white;
`

const LogoContainer = styled.div`
    width:15rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    color:rgb(168,143,178);
    font-weight:bold;
`

const MoreEpisodes = styled.p`
    font-size:.8rem;
    color:white;
`

const ShowTitle = styled.p`
    margin-bottom:0;
    font-size:1.5rem;
    text-align: center;
`

interface EpisodeFrontmatter{
    title: string,
}

interface Episode{
    html: string,
    frontmatter:EpisodeFrontmatter
}

interface Props {
    logo: {
        childImageSharp : GatsbyImageFluidProps
    },
    link : string,
    name: string,
    episodes: Episode[]
}

const moreEpisodesString : string = " More Episodes >>>";

const showSection = (props: Props) => {
    const logo = props.logo.childImageSharp.fluid;
    const link : string = props.link;
    return (
        <Wrapper>
            <a href={link}>
                <LogoContainer>
                    <Img fluid={logo} />
                    <ShowTitle>
                        {props.name}
                    </ShowTitle>
                    <MoreEpisodes>
                       {moreEpisodesString}
                    </MoreEpisodes>
                </LogoContainer>
            </a>
            {props.episodes.map(episode => {
                return (
                    <ContentBoxWrapper
                        key={episode.frontmatter.title}
                    >
                        <div className="episode-clip"
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