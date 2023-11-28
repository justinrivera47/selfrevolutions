import React from 'react'
import AboutSection from './AboutSection'
import Hero from './Hero'
import Expertise from './Expertise'
import Course from './Course'

const Home = () => {
  return (
    <>
    <Hero />
    {/* <div className='mid-div-container'>
      <div className='mid-div'>

      </div>
    </div> */}
    <AboutSection />
    <Expertise />
    <Course />
    <div className="blog-post-section-container">
      <div className="blog-post-section">
        <div className="cal-right-corner">15</div>
        <p className='blog-post-section-author'>By James Rue</p>
        <h4 className="blog-post-section-header">ICA Coaching</h4>
        <p className="blog-post-section-text">8 Lessons</p>
        <button className="hero-button">Read More</button>
      </div>
      <div className="blog-post-section">
      <div className="cal-right-corner">15</div>
        <p className='blog-post-section-author'>By James Rue</p>
        <h4 className="blog-post-section-header">ICA Coaching</h4>
        <p className="blog-post-section-text">8 Lessons</p>
        <button className="hero-button">Read More</button>
      </div>
      <div className="blog-post-section">
      <div className="cal-right-corner">15</div>
        <p className='blog-post-section-author'>By James Rue</p>
        <h4 className="blog-post-section-header">ICA Coaching</h4>
        <p className="blog-post-section-text">8 Lessons</p>
        <button className="hero-button">Read More</button>
      </div>
      <div className="blog-post-section">
      <div className="cal-right-corner">15</div>
        <p className='blog-post-section-author'>By James Rue</p>
        <h4 className="blog-post-section-header">ICA Coaching</h4>
        <p className="blog-post-section-text">8 Lessons</p>
        <button className="hero-button">Read More</button>
      </div>
    </div>
    </>
  )
}

export default Home
