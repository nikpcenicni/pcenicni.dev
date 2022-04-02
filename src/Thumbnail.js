import React , {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FaExpand, FaCompress} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr';
import { motion } from "framer-motion"

import './App.css';

 
function Thumbnail(props) {
    const [isOverlayVisible, setOverlayVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisibility(!isOverlayVisible);
    };

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 710px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
  
    const handleMediaQueryChange = mediaQuery => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    const expand = {
        hidden: {
            y: "-100yh",
        },
        visible: {
            y: "0",
        },
        exit: {
            y: "100yh",
        },
    };

    
    

    return (
        <>
        
            <motion.div 
             whileHover={{scale: 1.1}}
             
            className={'floating-Card ' + ((isOverlayVisible && isSmallScreen )? "expanded" : "")}>
                <div className='default'>
                    <div className="project-title">
                        {props.title}
                        
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="project-options" 
                            onClick={toggleOverlay} 
                            aria-expanded={isOverlayVisible}
                            aria-controls="expand"
                        >
                            {!isOverlayVisible && (
                                <FaExpand />
                            )}
                            {isOverlayVisible && (
                                <FaCompress />
                            )}
                        </motion.button>
                        
                    
                    </div>
                    <div className='project-info-header'>
                        <div className="project-modifiedDate">{props.lastModified}</div>
                        <div className="project-category">{props.category}</div>
                    </div>
                    
                    <div className="project-image">
                        <img src={props.image} alt={props.imageAlt} />
                    </div>
                </div>
                
                
                <div className="project-expand">
                    <div className="project-description">
                        {props.description}
                    </div>
                    <div className='button'>
                        <motion.a 
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                            className="githubLink" 
                            href={props.externalLink} 
                            target="_blank"
                        >
                            Code
                        </motion.a>
                    </div>
                    
                </div>                 
                
            </motion.div>
            {(!isSmallScreen && isOverlayVisible) && (
                <motion.div 
                    className={'Overlay ' + (isOverlayVisible? "expanded" : "")}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}

                >
                    <div id="Overlay" className={'floating-Card-Overlay'}>

                    <div className="project-title">
                        {props.title}
                        
                        <motion.button 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="project-options" 
                            onClick={toggleOverlay} 
                            aria-expanded={isOverlayVisible}
                            aria-controls="expand"
                        >
                            <GrClose/>
                        </motion.button>
                        

                    </div>
                    <div className="project-modifiedDate">{props.lastModified}</div>
                    <div className="project-category">{props.category}</div>

                    <div className="project-image">
                        <img src={props.image} alt={props.imageAlt} />
                    </div>
                    <div className="project-description">{props.description}</div>
                    <div className="button" >
                        <motion.a 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="githubLink" 
                            href={props.externalLink} 
                            target="_blank"
                        >
                            Code
                        </motion.a>
                    </div>

                    </div>
                </motion.div>
            )}
            
        </>
    )
}
 
export default Thumbnail;