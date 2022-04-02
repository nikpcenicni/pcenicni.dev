import React from "react"
import nik from './images/Nik.png';
import { motion } from 'framer-motion';
 
function NewComponent(props) {
  return (
    <div id="About">
      <h1>About</h1>

      <div className="floating-card-about">
        <div className="project-title">Who Am I</div>
        <div className="about-image">
          <img src={nik} alt="Head shot of Nikholas Pcenicni"></img>
        </div>
        <p>
            Hi, Im Nikholas Pcenicni,
            <br/>
            I am a freelance web developer studying computer science at Laurentian University.
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
              download
            >
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
    </div>
  )
}
 
export default NewComponent;