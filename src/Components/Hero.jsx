import React from 'react'
import './Hero.css'
import network from '../assets/net.png'
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", duration: 1000, mass: 0.4, damping: 8, stiffness: 130 },
  },
};

const zoomVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: { type: "spring", duration: 10, mass: 0.4, damping: 8, stiffness: 130 },
    },
  };


const Hero = () => {
  return (
    <div className='hero'>
        <div className="main-class">
            <div className="left">
                <div className="left-text"
      
  >

                
    <motion.h2 className="headings"  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    duration: '100',
    stiffness: 260,
    damping: 20
  }}>
        Enable over-the-air software <br />
        updates with the only <br />
        open source client-server <br />
        update manager.
    </motion.h2>
    <motion.small animate={{
    x: 0,
    y: 0,
    scale: 1.4,
    rotate: 0,
  }}>Easily integrate, manage and deploy IoT devices at scale.
    </motion.small>
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