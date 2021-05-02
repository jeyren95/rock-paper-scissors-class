import React from "react";

import "./Header.css";

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <img className="header-image" src="../images/logo.svg" alt=""/>
        <div className="score">
          <p className="score-text">SCORE</p>
          <p className="score-number">{this.props.score}</p>
        </div>
      </div>
    )
  }
}

export default Header;
