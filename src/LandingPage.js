import React from "react"
import nik from './images/Nik.png';
import { FaHome, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
 
function LandingPage(props) {
  return (
    <div id="Connect">
      <h1></h1>

      <div className="floating-card-about">
        <div className="project-title">Nikholas Pcenicni</div>
        <div className="about-image">
          <img src={nik} alt="Head shot of Nikholas Pcenicni"></img>
        </div>
        <p>
            I am a freelance web developer
        </p>
        <p>
            Use the buttons below to get in touch with me to discuss how I can turn your vision into a professional website.
        </p>
        <div className="buttons" >
            <a className="download" href='/Nikholas Pcenicni.vcf' download>Add Contact</a>
            <a className="download" href='mailto:nik@pcenicni.dev' >Email Me</a>
        </div>
      </div>
      <div>

      </div>
      <div className="floating-card-about topPadding">
        <div className="project-title">Links</div>
        <div className="Links">
            <a className="" href="https://github.com/nikpcenicni" target="_blank"> 
                <div className="icon">
                    <FaGithub/>
                </div> 
                GitHub
            </a>
            <a className="" href="https://www.linkedin.com/in/nikholaspcenicni/" target="_blank">
                <div className="icon">
                    <FaLinkedin/> 
                </div>
                LinkedIn
            </a>
            <a className="" href="https://instagram.com/nik.pcenicni" target="_blank">
                <div className="icon">
                    <FaInstagram/>
                </div>
                 Instagram
            </a>
            <a className="" href="https://twitter.com/nikpcenicni" target="_blank">
                <div className="icon">
                    <FaTwitter/>
                </div>
                Twitter
            </a>
        </div>
      </div>
      <div className="bottomPadding">

      </div>
      
    </div>
  )
}
 
export default LandingPage;