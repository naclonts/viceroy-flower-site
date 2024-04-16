import React from "react"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBandcamp, faYoutube } from '@fortawesome/free-brands-svg-icons'

import LandingImage from "../images/arousal_jag_album_cover.jpg"
import './index.css'


const IndexPage = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <Helmet>
        <title>The Viceroy Flower</title>
      </Helmet>


      <div className="main-content">


        {/* <figure className="image-section">
          <img src={LandingImage} alt="The Viceroy Flower Art" style={{ maxWidth: '100%', height: 'auto' }} />
        </figure> */}

        <div className="landing-splash-section">
            <a class="streaming-link" href="https://www.youtube.com/channel/UCEqkwVXS4DDawj2Mg3PoyJQ" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="brand-icon" icon={faYoutube} size="3x" />
              Stream here
            </a>

          <div className="landing-banner">
            <h1>The Viceroy Flower</h1>
          </div>

          <div className="landing-overlay news-section">
            <a>
              <h1>News</h1>
            </a>
          </div>

          <div className="landing-overlay articles-section">
            <a>
              <h1>Crepuscularisms</h1>
            </a>
          </div>

          {/* Footer section */}
          <div className="footer-section">
            <a class="streaming-link" href="https://www.youtube.com/channel/UCEqkwVXS4DDawj2Mg3PoyJQ" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="brand-icon" icon={faYoutube} size="3x" />
                Stream here
              </a>
            </div>

        </div>




        {/* Text Section */}
        {/* <section className="text-section">

          <h1>The Viceroy Flower</h1>
          <p style={{ fontStyle: 'italic' }}>Rockin and rollin all day long</p>
        </section> */}

        {/* Image Section */}
      </div>

    </main>
  )
}

export default IndexPage
