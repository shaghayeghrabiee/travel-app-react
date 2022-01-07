import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import * as bsIcon from "react-icons/bs";


const HeroSection = () => {
    return ( 
        <div className='hero-container'>
            <video src='videos/video-1.mp4' autoPlay muted loop/>
            <h1>ADVENTURE AWAITS</h1>
            <p>WHAT ARE YOU WAITING FOR?</p>    
            <div className='hero-btns'>
                <Button className="btns"
                 buttonStyle='btn--outline'
                 buttonSize="btn--large">
                 GET STARTED
                 </Button>
                <Button className="btn"
                 buttonStyle='btn--primary'
                 buttonSize="btn--large">
                 WATCH TRAILER <bsIcon.BsFillPlayFill className='icon'/>
                 </Button>
            </div>
            
        </div>
     );
}
 
export default HeroSection;