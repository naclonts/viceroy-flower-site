import React from "react"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBandcamp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import LandingImage from "../images/abstraction.jpg"
import './index.css'


const IndexPage = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <Helmet>
        <title>The Viceroy Flower</title>
      </Helmet>


      <div className="main-content">
        {/* Text Section */}
        <section className="text-section">
          {/* Social Media Icons */}
          <header className="header-icons">
            <FontAwesomeIcon className="brand-icon" icon={faBandcamp} />
            <FontAwesomeIcon className="brand-icon" icon={faInstagram} />
            <FontAwesomeIcon className="brand-icon" icon={faTwitter} />
          </header>

          <h1>The Viceroy Flower</h1>
          <p style={{ fontStyle: 'italic' }}>Rockin and rollin all day long</p>
          <button
            onClick={() => {
              // Logic to handle the click event
              // For example, navigating to the purchase page for the album
              window.location.href = 'https://example.com'; // Replace with your actual album purchase link
            }}
          >
            Buy Arousal Jag
          </button>
        </section>

        {/* Image Section */}
        <figure className="image-section">
          <img src={LandingImage} alt="The Viceroy Flower Art" style={{ maxWidth: '100%', height: 'auto' }} />
        </figure>
      </div>

      {/* Bottom Social Media Icons */}
      <footer style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <FontAwesomeIcon className="brand-icon" icon={faBandcamp} />
        <FontAwesomeIcon className="brand-icon" icon={faInstagram} />
        <FontAwesomeIcon className="brand-icon" icon={faTwitter} />
      </footer>
    </main>
  )
}

export default IndexPage
