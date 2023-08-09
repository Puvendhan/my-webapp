import './App.css';
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <button className="mode-toggle" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <div className="video-container">
        <h1 className="title orange-text">Welcome to Declop</h1>
        <h3 className="subtitle orange-text">Topic-AWS EC2</h3>
        <h3 className="subtitle orange-text">EC2-Part1</h3>
        <video className="video" controls>
          <source
            src="https://d1ohz1rdqtg64n.cloudfront.net/AWS-EC2-part-1.mp4"
            type="video/mp4"
          />
        </video>
        <h3 className="subtitle orange-text">EC2-Part2 will be coming soon</h3>
        <h2><p className="description orange-text">
          We are coming soon with a great idea
        </p></h2>
      </div>
    </div>
  );
}

export default App;
