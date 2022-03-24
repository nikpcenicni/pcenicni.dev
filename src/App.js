// App.jsx
 
import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import LandingPage from './LandingPage.js';
import { motion } from 'framer-motion';


import './App.css';

function App() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };



  return (
    
    <BrowserRouter>
      <div className="App">


        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/connect" component={LandingPage} />

  
        <div className={"navigation "  + (isNavVisible? "expanded" : "")}>
          <Link to="/" className="item">
              <motion.div
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                Nikholas Pcenicni
              </motion.div>
            </Link>

          <button 
            onClick={toggleNav} 
            className="navButton Burger">
            <FaBars/>
          </button>

          <div className="navigation-sub">

              <motion.div
              className='maxWidth'
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >                             
              <Link 
                to="/" 
                onClick={toggleNav} 
                className="item"
              >
                
                  Projects
                
                
              </Link>
            </motion.div>
            <motion.div
              className='maxWidth'
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
              <Link 
                to="/articles" 
                onClick={toggleNav} 
                className="item"
              >
                Articles
              </Link>
            </motion.div>
            <motion.div
              className='maxWidth'
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              <Link 
                to="/about" 
                onClick={toggleNav} 
                className="item"
              >
                About             
              </Link>
            </motion.div>

          </div>
 
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;