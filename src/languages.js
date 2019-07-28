import React, { Component } from 'react';

class Languages extends Component{
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
