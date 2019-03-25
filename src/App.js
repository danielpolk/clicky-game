import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import Nav from "./components/Nav/Nav";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import players from "./players.json";
import "./App.css";



function shufflePlayers(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    players,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Try again!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledplayers = shufflePlayers(players);
    this.setState({ players: shuffledplayers });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Spurs Memory Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Try to click on each Spurs player only once. Good luck and GO SPURS GO!
        </Title>

        <Container>
          <Row>
            {this.state.players.map(player => (
              <Column size="md-3 sm-6" key={player.id}>
                <PlayerCard
                  key={player.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  name={player.name}
                  number={player.number}
                  position={player.position}
                  image={player.image}
                  id={player.id}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}



export default App;
