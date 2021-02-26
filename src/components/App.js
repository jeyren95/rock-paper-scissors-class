import React from "react";
import {Route, Router} from "react-router-dom";

import history from "../history";
import Home from "./Home";
import Header from "./header/Header";
import Rules from "./rules/Rules";
import StartGame from "./StartGame";

class App extends React.Component {
  state=({
    playerChoice: "",
    houseChoice: "",
    results: "",
    score: 0
  })

  handleClick = (playerChoice) => {
    this.setState({playerChoice: playerChoice})
  }

  renderHouseChoice = () => {
    var houseChoice = Math.ceil(Math.random()*3)
    if (houseChoice === 1) {
      this.setState({houseChoice: "paper"})
    } else if (houseChoice === 2) {
      this.setState({houseChoice: "scissors"})
    } else if (houseChoice === 3) {
      this.setState({houseChoice: "rock"})
    }
  }

  renderResults = () => {
    if (this.state.playerChoice === this.state.houseChoice) {
      this.setState({results: "DRAW", score: this.state.score})
    } else if (this.state.playerChoice === "scissors" && this.state.houseChoice === "paper") {
      this.setState({results: "YOU WIN", score: this.state.score+1})
    } else if (this.state.playerChoice === "paper" && this.state.houseChoice === "rock") {
      this.setState({results: "YOU WIN", score: this.state.score+1})
    } else if (this.state.playerChoice === "rock" && this.state.houseChoice === "scissors") {
      this.setState({results: "YOU WIN", score: this.state.score+1})
    } else {
      this.setState({results: "YOU LOSE", score: this.state.score-1})
    }
  }

  render() {
    return (
      <Router history={history}>
        <Header score={this.state.score}/>
        <Route path="/" exact>
          <Home handleClick={this.handleClick}/>
        </Route>
        <Route path="/start-game" exact>
          <StartGame
          playerChoice={this.state.playerChoice}
          houseChoice={this.state.houseChoice}
          results={this.state.results}
          renderHouseChoice={this.renderHouseChoice}
          renderResults={this.renderResults}
           />
        </Route>
        <Rules />
      </ Router>
    )
  }
}

export default App;
