import React from 'react'
import './Home.css'
import Navbar from '../../Pages/Navbar/Navbar'
import home_banner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import play_icon from  '../../../assets/play_icon.png'
import info_icon from  '../../../assets/info_icon.png'
import Titile_cards from '../../Pages/Titlecards/Titlecards'
import Footer from '../../Pages/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='hero'>
          <img src={home_banner} alt="" className='banner_img'/>
          <div className='hero-caption'>
            <img src={hero_title} alt="" className='caption-img'/>
            <p> gsgdgsgsgfgsuygsgxygxayxhvhgff yfvghcxfygfafd nbfytfdfysvxhgsgisuhs xsdvgfywqadgihwkqhuseiw qbsdvqyhwfyu ashfcdhwqretgdhfvwqusd nbcdgfswc vhb</p>
            <div className='hero-btns'>
            <button className='btn'><img src={play_icon} alt="" /> Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
          </div>
          <Titile_cards/>
          </div>
        </div>
        <div className="more-cards">
        <Titile_cards title={"Blockbuster Movies"} category={"popular"} /> 
        <Titile_cards title={"Only on Netflix"} category={"top_rated"}/>
        <Titile_cards title={"Upcoming"} category={"upcoming"}/>
        <Titile_cards title={"Top pics for you"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home