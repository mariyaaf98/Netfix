import React from 'react'
import './Footer.css'
import facebook_icon from '../../../assets/facebook_icon.png'
import insta_icon from '../../../assets/instagram_icon.png'
import youtube_icon from '../../../assets/youtube_icon.png'
import twter_icon from '../../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={youtube_icon} alt="" />
        <img src={insta_icon} alt="" />
        <img src={twter_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Terms of use</li>
        <li>privacy</li>
        <li>Legel Notices</li>
        <li>Cookie Preferences</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyrite-text'>@ 1927-2025 Netflix, Inc</p>
    </div>
  )
}

export default Footer