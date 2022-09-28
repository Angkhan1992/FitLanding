import React from 'react'
import './Reasons.css'

import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

export const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        {/* <div className="center-r"></div> */}
        <div className="right-r">
            <span>Some Reasons</span>
            <div>
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt="" />
                    <span>over 140+ expert coachs</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>train smarter and faster then before</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 free program for new member</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>reliable partners</span>
                </div>
                <span className='patiner'>our partiners</span>
                <div className='patiners'>
                    <img src={nb} alt="" />
                    <img src={nike} alt="" />
                    <img src={adidas} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
