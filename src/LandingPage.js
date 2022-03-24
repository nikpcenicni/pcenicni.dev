import React from "react"
import nik from './images/Nik.png';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import {motion} from 'framer-motion';
 
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
            <motion.a 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="download" 
                href='/Nikholas Pcenicni.vcf' 
                download>
                Add Contact
            </motion.a>
            <motion.a 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="download" 
                href='mailto:nik@pcenicni.dev' 
            >
                Email Me
            </motion.a>
        </div>
      </div>
      <div>

      </div>
      <div className="floating-card-about topPadding">
        <div className="project-title">Links</div>
        <div className="Links">
            <motion.a 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className=""
                href="https://github.com/nikpcenicni" 
                target="_blank"> 
                <div className="icon">
                    <FaGithub/>
                </div> 
                GitHub
            </motion.a>
            <motion.a 
             whileHover={{scale: 1.1}}
             whileTap={{scale: 0.9}}
             className="" 
             href="https://www.linkedin.com/in/nikholaspcenicni/" 
             target="_blank">
                <div className="icon">
                    <FaLinkedin/> 
                </div>
                LinkedIn
            </motion.a>
            <motion.a 
             whileHover={{scale: 1.1}}
             whileTap={{scale: 0.9}}
             className="" 
             href="https://instagram.com/nik.pcenicni" 
             target="_blank">
                <div className="icon">
                    <FaInstagram/>
                </div>
                 Instagram
            </motion.a>
            <motion.a 
             whileHover={{scale: 1.1}}
             whileTap={{scale: 0.9}}
             className="" 
             href="https://twitter.com/nikpcenicni" 
             target="_blank">
                <div className="icon">
                    <FaTwitter/>
                </div>
                Twitter
            </motion.a>
        </div>
      </div>
      <div className="bottomPadding">

      </div>
      
    </div>
  )
}
 
export default LandingPage;