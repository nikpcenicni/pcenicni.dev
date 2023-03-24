import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <head>    
        <link href="/dist/output.css" rel="stylesheet"/>
      </head>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>
          <img src={logo} class="w-5 md:w-10 lg:w-15" alt="logo" />
          <p>Nikholas Pcenicni</p>
        </div>

      </header>
    </div>
  );
}

export default App;
