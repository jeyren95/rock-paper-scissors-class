import React from "react";
import {Link} from "react-router-dom";

import "./Home.css";

class Home extends React.Component {
  renderChoices() {
    const choices = ["paper", "scissors", "rock"]

    return choices.map((choice) => {
      return (
        <div key={choice} onClick={() => this.props.handleClick(choice)} className={`choice ${choice}`}>
          <Link to="/start-game">
            <img src={`../images/icon-${choice}.svg`} alt="" />
          </Link>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="home">
        <div className="background-triangle">
          <img src="../images/bg-triangle.svg" alt="" />
        </div>
        {this.renderChoices()}
      </div>
    )
  }
}

export default Home;
