import React , {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FaExpand, FaCompress} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr';

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

    return (
        <>
        
            <div className={'floating-Card ' + ((isOverlayVisible && isSmallScreen )? "expanded" : "")}>
                <div className="project-title">
                    {props.title}
                    
                    <button className="project-options" 
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
                    </button>
                    
                
                </div>
                <div className='project-info-header'>
                    <div className="project-modifiedDate">{props.lastModified}</div>
                    <div className="project-category">{props.category}</div>
                </div>
                
                <div className="project-image">
                    <img src={props.image} alt={props.imageAlt} />
                </div>
                <div className='expand'>
                    <div className="project-expand">
                            <div className="project-description">{props.description}</div>
                            {props.blogLink.length > 0 && (
                                <Link to={props.blogLink} style={{ textDecoration: 'none' }}>
                                <div className="project-blogLink">
                                    Learn to make your own
                                </div>
                                </Link>
                            )}
                    </div>       
                </div>
                
                
                
            </div>
            {!isSmallScreen && (
                <div className={'Overlay ' + (isOverlayVisible? "expanded" : "")}>
                    <div id="Overlay" className={'floating-Card-Overlay'}>

                    <div className="project-title">
                        {props.title}
                        
                        <button className="project-options" 
                        onClick={toggleOverlay} 
                        aria-expanded={isOverlayVisible}
                        aria-controls="expand"
                        >
                            <GrClose/>
                        </button>
                        

                    </div>
                    <div className="project-modifiedDate">{props.lastModified}</div>
                    <div className="project-category">{props.category}</div>

                    <div className="project-image">
                        <img src={props.image} alt={props.imageAlt} />
                    </div>
                    <div className="project-description">{props.description}</div>
                    {props.blogLink.length > 0 && (
                        <Link to={props.blogLink} style={{ textDecoration: 'none' }}>
                        <div className="project-blogLink">
                            Learn to make your own
                        </div>
                        </Link>
                    )}

                    </div>
                </div>
            )}
            
        </>
    )
}
 
export default Thumbnail;