import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import GameSelect from './components/GameSelect'
import RPSHome from './components/RPSHome'
import RPSGame from './components/RPSGame'
import TicTacToeApp from './components/TicTacToeApp';
import SnakeHome from './components/SnakeHome'
import SnakeApp from './components/SnakeApp'
import HangmanApp from './components/HangmanApp'
import MemoryApp from './components/MemoryApp'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route component = {App} path="/" exact/>
          <Route component = {GameSelect} path='/game-select' />
          <Route component = {RPSHome} path='/rps-home' />
          <Route component = {RPSGame} path='/rps-game/:player' />
          <Route component = {TicTacToeApp} path='/tic-tac-toe' />
          <Route component = {SnakeHome} path='/snake-home' />
          <Route component = {SnakeApp} path="/snake/:player" />
          <Route component = {HangmanApp} path="/hangman" />
          <Route component = {MemoryApp} path="/memory" />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
