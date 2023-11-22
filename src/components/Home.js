import React from 'react'
import AboutSection from './AboutSection'
import Hero from './Hero'
import Expertise from './Expertise'

const Home = () => {
  return (
    <>
    <Hero />
    <AboutSection />
    <Expertise />
    <div className="our-courses">
      <div className='our-courses-content'>
        <p className='topper'><span className='purple'>/</span> Our Courses.</p>
        <h2 className="section-title">We Provide <span className='purple'>The Best Courses</span> For You</h2>
        <p className='section-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
      </div>
      <div className="course-cards">
        <div className="course-card">
          <div className='img-filler'>X</div>
          <button className="hero-button">Join now</button>
          <h3>Course Title Here</h3>
          <p className='section-paragraph'>Lorem ipsum dolor Lorem dfiroqnv fndjawvnrjewa fdnajvndfav fndjaio</p>
        </div>
        <div className="course-card">
          <div className='img-filler'></div>
          <button className="hero-button">Join now</button>
          <h3>Course Title Here</h3>
          <p className='section-paragraph'>Lorem ipsum dolor Lorem dfiroqnv fndjawvnrjewa fdnajvndfav fndjaio</p>
        </div>
        <div className="course-card">
          <div className='img-filler'></div>
          <button className="hero-button">Join now</button>
          <h3>Course Title Here</h3>
          <p className='section-paragraph'>Lorem ipsum dolor Lorem dfiroqnv fndjawvnrjewa fdnajvndfav fndjaio</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
