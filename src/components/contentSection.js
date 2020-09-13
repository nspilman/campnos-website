import React from "react"

const contentSection = (props) => {
    return (
        <div className="content-section">
            <div className="logo-container">
            <img src={props.logo}/>
            <p>{props.name}</p>
            </div>
    {[1,2,3].map(row => {
        return (
        <div
        key={row} 
        className='content-box-wrapper'
        style={{
            margin:'2rem',
        }}
        > 
        
        <div 
        className='content-box'
        style={{
            width:'100%',
            color:'white',
            height:'13rem',
        }}
        >
            <img 
            style={{
                height:'12rem',
                width:'20rem',
        }}
            src={"https://source.unsplash.com/random?sig="+ Math.floor((Math.random() * 100) + 1)}/>
        <p> Episode {row}</p>
        </div>
        </div>
    )})}
    </div>
    )
}

export default contentSection