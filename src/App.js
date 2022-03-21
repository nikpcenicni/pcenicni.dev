// App.jsx
 
import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 

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

  
        <div className={"navigation "  + (isNavVisible? "expanded" : "")}>
          <Link to="/" className="item">Nikholas Pcenicni</Link>
          <button onClick={toggleNav} className="navButton Burger">
            <FaBars/>
          </button>
          <div className="navigation-sub">
                                            
            <Link to="/" onClick={toggleNav} className="item">Projects</Link>
            <Link to="/articles" onClick={toggleNav} className="item">Articles</Link>
            <Link to="/about" onClick={toggleNav} className="item">About</Link>

          </div>
 
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;