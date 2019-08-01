import React, { Component } from 'react';

class Languages extends Component{

//Code from App.js
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



  render(){
    const { languages } = this.props;
    const languageList = languages.map(language => {
      return (
        <div className="language" key={language.id}>
          <div>{language.name}</div>
        </div>
      )
    })
    return(
      <div className="language-list">
        { languageList }
      </div>
    )
  }
}

export default Languages
