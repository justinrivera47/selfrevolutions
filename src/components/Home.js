import React from 'react'
import AboutSection from './AboutSection'
import Hero from './Hero'

const Home = () => {
  return (
    <>
    <Hero />
    <AboutSection />
    <div className="our-expertise">
      <div className="expertise left-column">
      <div className="background-image"></div>
        <div className="lower-div">
          <h3>Specific Skills</h3>
          <p>Experential Learning</p>
          <p>Self Discovery</p>
          <p>Collective Education</p>
        </div>
      </div>
      <div className="expertise right-column">
        <div className="expertise-container">
          <p className='topper'><span className='purple'>/</span> Our Expertise.</p>
          <h2 className='section-title'>We Are <span className='purple'>Experts</span> In The Field Of Public Speaking</h2>
          <p className="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.</p>
        </div>
        <div className="status-container">
          <div className="status-item">
            <img src="/images/icons/icon_1.png" alt="" />
            <h3>Successful Student</h3>
            <p>Lorem ipsum dolor sit amet consectet adipiscing elit sedo.</p>
          </div>
          <div className="status-item">
            <img src="/images/icons/icon_1.png" alt="" />
            <h3>Successful Student</h3>
            <p>Lorem ipsum dolor sit amet consectet adipiscing elit sedo.</p>
          </div>
        </div>
        <button className="hero-button">Show More</button>
      </div>
    </div>
    </>
  )
}

export default Home
