
import React from "react"

interface Props {
    videoId: string
}

const YoutubeFrame = ({videoId} : Props) => {
    return (
        <iframe src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
  }
  
  export default YoutubeFrame