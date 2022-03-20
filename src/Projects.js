import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component

import './App.css';


 
function Projects(props) {


  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <div className='Cards'>

        <Thumbnail
          link="/npx-card"
          image="images/npxcard.png"
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
          link="/npx-card"
          image="images/npxcard.png"
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
          link="/npx-card"
          image="images/npxcard.png"
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
      </div>     
    
    </div>
  )
}
 
export default Projects;