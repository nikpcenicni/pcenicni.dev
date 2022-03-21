import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import nachos from './images/nachos.png';
import npxcard from './images/npxcard.png';
import './App.css';


 
function Projects(props) {


  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <div className='Cards'>

        <Thumbnail
          image={npxcard}
          title="NPX Card"
          category="Personal"
          description="This project was created off a modified package from github 
          to be used as a virtual business card. By running the simple command 
          shown above the user is shown a graphical interface in the terminal screen.
          The interface shows links for my twitter, GitHub, LinkedIn, and my portfolio. 
          There is also the option to download a copy of my resume or send an email."
          blogLink="/articles/npx-card"
          externalLink="/github/npx-card"
          lastModified="March 1st, 2022"
        />
        
        <Thumbnail
           image={nachos}
          title="Nachos"
          category="School"
          description="This project was created off a modified package from github 
          to be used as a virtual business card. By running the simple command 
          shown above the user is shown a graphical interface in the terminal screen.
          The interface shows links for my twitter, GitHub, LinkedIn, and my portfolio. 
          There is also the option to download a copy of my resume or send an email."
          blogLink=""
          externalLink="/github/nachos"
          lastModified="March 1st, 2022"
        />
        
        <Thumbnail
           image={npxcard}
          title="Netflix Light"
          category="School"
          description=""
          blogLink=""
          externalLink="/github/npx-card"
          lastModified="December 1st, 2021"
        />
      </div>     
    
    </div>
  )
}
 
export default Projects;