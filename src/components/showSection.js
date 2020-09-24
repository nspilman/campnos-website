import React from "react"
import Img from "gatsby-image"

const contentSection = (props) => {
    const logo = props.logo.childImageSharp.fluid;
    const link = props.link;
    return (
        <div className="content-section">
            <a href={link}>
                <div className="logo-container">
                    <Img fluid={logo} />
                    <p>{props.name}</p>
                </div>
            </a>
            {props.episodes.map(episode => {
                return (
                    <div
                        key={episode.title}
                        className='content-box-wrapper'
                        style={{
                            margin: '2rem',
                        }}
                    >

                        <div
                            className='content-box'
                            style={{
                                width: '100%',
                                color: 'white',
                                height: '13rem',
                            }}
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: episode.html }}
                            />
                            <p>{episode.title}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default contentSection