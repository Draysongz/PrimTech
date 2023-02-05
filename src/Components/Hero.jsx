import React from 'react'
import './Hero.css'
import network from '../assets/net.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="main-class">
            <div className="left">
                <div className="left-text">

                
    <h2 className="headings">
        Enable over-the-air software <br />
        updates with the only <br />
        open source client-server <br />
        update manager.
    </h2>
    <small>Easily integrate, manage and deploy IoT devices at scale.
    </small>
    </div>
    <div className="left-buttons">
        <button type='button' className='learnBtn'>Learn More</button>
        
        <button type='button' className='contactBtn'>Contact us<span><i class="fa-solid fa-arrow-right"></i></span> </button>
        
        
    </div>
</div>
<div className="right">
<img src={network} alt="network Image" className="networkImg" />
</div>
</div >
    </div>
  )
}

export default Hero