import React, { Component } from 'react';
// import Languages from './languages';
import TextLoop from 'react-text-loop';
import Portfolio from './portfolio.jpg'

class App extends Component {
  // state = {
  //   languages : [
  //     { name: "HTML", id: 0 },
  //     { name: "CSS", id: 1 },
  //     { name: "PHP", id: 2 },
  //     { name: "JavaScript", id: 3 },
  //     { name: "React", id: 4 },
  //     { name: "Python", id: 5 },
  //     { name: "Java", id: 6 },
  //     { name: "Node", id: 7 },
  //     { name: "Express", id: 8 }
  //   ]
  // }
  // handleChange() {
  //   this.setState({language: this.state.id})
  // }
  // <Languages languages={this.state.languages}/></

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My name is Chris Ford and I like to code in <n/>
            <TextLoop>
              <span> HTML</span>
              <span> CSS</span>
              <span> JavaScript</span>
              <span> React</span>
              <span> Python</span>
              <span> Java</span>
              <span> Node</span>
              <span> Express</span>
              <span> PHP</span>
            </TextLoop>
          </h1>
        </header>
        <p>The Portfolio isn't ready yet :(</p>
        <p>In the meantime, please see yourself over to Dawson Hosting and signup for some hosting and design services!</p>
        <a
          className="App-link"
          href="https://dawsonhosting.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dawson Hosting
        </a>
<br />
<br />

<img src={Portfolio} alt="altered-me" />;

<br />
<br />
<br />

        <footer>
        <p> &copy; Chris Ford, 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
