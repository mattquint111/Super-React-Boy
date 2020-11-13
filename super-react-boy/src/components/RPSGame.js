import React, { useState, useEffect, useHistory } from 'react'
import { Link } from 'react-router-dom'
import { secretKiwi } from './secretKiwi'


function RPSGame(props) {

    const [game, setGame] = useState({
        round: 1,
        wins: 0,
        losses: 0,
        ties: 0
    })

    const [choiceIcon, setPlayerChoice] = useState({})

    const handleOnClick = (e) => {
        let choices = ['rock', 'paper', 'scissors']
        let computerChoice = choices[Math.floor(Math.random() * 3)]
        let playerChoice = e.target.id

        setPlayerChoice({
            playerChoice: "fa-hand-" + e.target.id,
            computerChoice: "fa-hand-" + computerChoice
        })

        if (playerChoice == computerChoice) {
            setGame({
                ...game,
                round: game.round + 1,
                ties: game.ties + 1,
                result: 'TIE'
            })
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            playerWins()
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            playerWins()
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            playerWins()
        } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
            computerWins()
        } else if (computerChoice === 'paper' && playerChoice === 'rock') {
            computerWins()
        } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
            computerWins()
        }
    }

    const daBomb = (e) => {
        setPlayerChoice({
            playerChoice: "fas fa-bomb fa-rotate-270",
            computerChoice: "far fa-dizzy deadComputer"
        })

        setGame({
                ...game,
                round: game.round + 1,
                wins: game.wins + 1,
                result: 'WIN!!!'
            })
    }

  function playerWins() {
    setGame({
        ...game,
        round: game.round + 1,
        wins: game.wins + 1,
        result: 'WIN'
    })
  }

  function computerWins() {
    setGame({
        ...game,
        round: game.round + 1,
        losses: game.losses + 1,
        result: 'LOSE'
    })
  } 


  return (
    <div className="gameCont">

        <div className='gameplayHeader'>
            <Link to='/rps-home'><i className="fas fa-arrow-left goToHome"></i></Link>
            <h1 className='pretendo rpsTitle'>ROCK PAPER SCISSORS</h1>
            <div><i className="fas fa-bomb easterEgg" onClick={daBomb}></i></div>
        </div>

        <div className='gameplayCont'>
            <h1 className='round'>Round {game.round}</h1>

            <div className='scoresCont'>
                <div className='scoreCont'>
                    <h2 className='scoreTitle'>Wins</h2>
                    <h2>{game.wins}</h2>
                </div>
                <div className='scoreCont'>
                    <h2 className='scoreTitle'>Ties</h2>
                    <h2>{game.ties}</h2>
                </div>
                <div className='scoreCont'>
                    <h2 className='scoreTitle'>Losses</h2>
                    <h2>{game.losses}</h2>
                </div>
            </div>

            <div className='gameResultCont'>

                <div className='playerResultCont'>

                    <div className="playerChoice">
                        <div className="choiceIconCont">
                            <i className={"rpsIcon far fa-rotate-90 playerChoiceIcon " + choiceIcon.playerChoice}></i>
                        </div>
                        <h1 className='playerName'>{props.match.params.player}</h1>
                    </div>

                    <div className="middleCont">
                        <h1 className="resultTitle">Result</h1>
                        <i onClick={secretKiwi} class="fas fa-kiwi-bird rpsSecretKiwi"></i>
                        <div className="outerResult">
                            <div className="result">
                            <h1>{game.result}</h1>
                            </div>
                        </div>
                        
                    </div>

                    <div className="playerChoice">
                        <div className='choiceIconCont'>
                            <i className={"rpsIcon far playerChoiceIcon computerIcon " + choiceIcon.computerChoice}></i>
                        </div>
                        <h1 className='playerName'>Computer</h1>
                    </div>

                </div>

                <div className='gameChoiceCont'>
                    <div className="gameChoice">
                    <i className="rpsIcon far fa-hand-rock gameChoiceBtn" onClick={handleOnClick} id='rock'></i>
                    <h2 className='gameChoiceTitle'>Rock</h2>
                    </div>
                    <div className="gameChoice">
                    <i className="rpsIcon far fa-hand-paper gameChoiceBtn" onClick={handleOnClick} id='paper'></i>
                    <h2 className='gameChoiceTitle'>Paper</h2>
                    </div>
                    <div className="gameChoice">
                    <i className="rpsIcon far fa-hand-scissors gameChoiceBtn" onClick={handleOnClick} id='scissors'></i>
                    <h2 className='gameChoiceTitle'>Scissors</h2>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )

}

export default RPSGame