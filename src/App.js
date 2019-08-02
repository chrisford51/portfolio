import React, { Component } from 'react';
// import Languages from './languages';
import TextLoop from 'react-text-loop';
import Portfolio from './images/portfolio.jpg'
import Carousel from './carousel';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My name is Chris Ford and I like to code in&nbsp;
            <TextLoop>
              <span> HTML</span>
              <span> CSS</span>
              <span> JavaScript</span>
              <span> React</span>
              <span> Python</span>
              <span> Node</span>
              <span> Express</span>
              <span> PHP</span>
            </TextLoop>
          </h1>
        </header>
        <p>The Portfolio isn't ready yet :(</p>
        <p>You can track progress for the site on&nbsp;
        <a href="https://github.com/chrisford51/portfolio" target="_blank" rel="noopener noreferrer">Github!</a></p>
        <p>In the meantime, please see yourself over to
        <a className="App-link" href="https://dawsonhosting.com" target="_blank" rel="noopener noreferrer"> Dawson Hosting</a> and signup for some hosting and design services!</p>
<br />
<br />

<img src={Portfolio} alt="altered-me" />

<br />
<br />
<Carousel />
<br />

        <footer>
        <p> &copy; Chris Ford, 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
