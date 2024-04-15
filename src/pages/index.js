import React from "react"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBandcamp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
          <div className="landing-text">
            <h1>The Viceroy Flower</h1>
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
