import React from "react";

import "./Header.css";

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <img className="header-image" src="../images/logo.svg" alt=""/>
        <div className="score">
          <div className="score-text">SCORE</div>
          <div className="score-number">{this.props.score}</div>
        </div>
      </div>
    )
  }
}

export default Header;
