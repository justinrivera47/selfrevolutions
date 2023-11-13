import React from 'react'
import test from '../assets/images/testimonial.png'

const AboutSection = () => {
  return (
    <div>
      <section className="about-section">
      <div className="about-content">
        <div className="left-column">
          <p className='topper'><span className='purple'>/</span> About Self Revolutions</p>
          <h2>We Are Ready To Take You To <span className='purple'>The Next</span> Level</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.</p>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 4</li>
            <li>Point 5</li>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 4</li>
            <li>Point 5</li>
          </ul>
          <div className="testimonial">
            <img src={test} alt="Person" />
            <div className='testimonial-content'>
              <q>A brief testimonial from a satisfied customer.</q>
              <p className="testimonial-name">Justin Rivera <span>- Founder Self Revolutions</span></p>
            </div>
          </div>
        </div>
        <div className="right-column">
        <div className="left-square">10 years of experience</div>
        <div className="middle-picture">
          <img src="middle-image.jpg" alt="Middle" />
        </div>
        <div className="right-design-div"></div>
      </div>
      </div>
    </section>
    </div>
  )
}

export default AboutSection
