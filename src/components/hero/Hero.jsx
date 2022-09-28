import React from 'react'
import Header from '../header/Header'
import './Hero.css'
import {motion} from 'framer-motion'
import {NumberCounter} from 'number-counter'

import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

export const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    const isMobile = window.innerWidth <= 768 ? true : false

    return (
        <div className='hero'>
            <div className="blur blur-h"></div>
            <div className='left-h'>
                <Header />

                <div className="the-best-ad">
                    <motion.div
                        initial={{left: isMobile? '140px' : '238px'}}
                        whileInView={{left: '8px'}}
                        transition= {{...transition, type: 'tween'}}
                    >
                    </motion.div>
                    <span>the best fitness club in the word</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>member joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className='btn'> Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>

                <motion.div className="heart-rate"
                    initial={{right: '-1rem'}}
                    whileInView={{right: '4rem'}}
                    transition= {transition}
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bmp</span>
                </motion.div>

                <img src={hero_image} alt="" className="hero-image"/>
                <motion.img src={hero_image_back} alt="" className="hero-image-back"
                    initial={{right: '14rem'}}
                    whileInView={{right: '24rem'}}
                    transition= {transition}
                />

                <motion.div className="calories"
                    initial={{right: '40rem'}}
                    whileInView={{right: '32rem'}}
                    transition= {transition}
                >
                    <img src={Calories} alt = "" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
