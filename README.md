# Application

## Spurs Memory Game

## Description

This is a React application where users click on each player from the San Antonio Spurs 2018-19 roster. Each click triggers a random shuffle of the player cards and adds 1 point to the user's score. Clicking any player twice will reset the user's score to zero. To win the game, the user must click all 12 of the Spurs players.

### Live Link

Go to https://spurs-memory-game.herokuapp.com/ to see this app in action.

### Installation

1. Clone repository using the code -> _git clone https://github.com/danielpolk/spurs-memory-game.git.
2. Open a terminal session for the directory where the application was cloned to.
3. Run *yarn install* to install the dependencies.
4. Run *yarn start* to start the react app and open it in the browser.

## Technical Information

1. This app's UI is broken up into structured React components which can be found in the *src* and *components* folders.
2. The data for each player card is linked to the *players.json* file.
3. Each of the shuffled cards are managed by the component's state and respond to user click events.

### Demo

![Demo](./public/spurs.gif)
