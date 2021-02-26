import React from "react";
import {Link} from "react-router-dom";

import "./StartGame.css";

class StartGame extends React.Component {
  async componentDidMount() {
    await this.props.renderHouseChoice();
    this.props.renderResults();
  }

  render() {
    return (
      <div className="start-game">
        <div className="row">
          <div className="col player-choice">
            <h1>YOU PICKED</h1>
            <div className={`selected-choice selected-${this.props.playerChoice}`}>
              <img src={`../images/icon-${this.props.playerChoice}.svg`} alt="" />
            </div>
          </div>

          <div className="col house-choice">
            <h1>THE HOUSE PICKED</h1>
            <div className={`selected-choice selected-${this.props.houseChoice}`}>
              <img src={`../images/icon-${this.props.houseChoice}.svg`} alt="" />
            </div>
          </div>
        </div>

        <div className="results">
          <h1>{this.props.results}</h1>
          <div className="play-again">
            <Link to="/">
              <button className="ui inverted button">PLAY AGAIN</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

}

export default StartGame
