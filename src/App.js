import React from 'react';
import './App.scss';
import './constants';
import { content } from './constants';

function App() {
  return (
    <div className="App">
        <div className="images">
        </div>
        <div className="dev-details">
          <div className="header-content">
              <p className="welcome-content">Hi there, Welcome ! </p>
          </div>
          <div className="body-content">
                <p>{content}</p>
          </div>
          <div className="line-break">
          </div>
          <div className="body-icons">
                <img alt="timer" src={require("./assets/angular.svg")}></img>
                <img alt="timer" src={require("./assets/java (2).svg")}></img>
                <img alt="timer" src={require("./assets/js.svg")}></img>
                <img alt="timer" src={require("./assets/docker.svg")}></img>
                <img alt="timer" src={require("./assets/python.svg")}></img>
                <img alt="timer" src={require("./assets/sass.svg")}></img>
                <img alt="timer" src={require("./assets/typescript.svg")}></img>
                <img alt="timer" src={require("./assets/react.svg")}></img>
            </div>
          <div className="footer-content-links">
          <div className="line-break">
          </div>
          <div>
            <a className ="social-links" href="www.github.com/giriraj12" target="_blank"><img alt="timer" src={require("./assets/github.svg")}></img></a>
            <a className ="social-links" href="www.linkedin.com/in/giriraj-12" target="_blank"><img alt="timer" src={require("./assets/linkedin.svg")}></img></a>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
