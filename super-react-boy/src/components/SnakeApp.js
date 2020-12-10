import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UseInterval from './snakeComponents/UseInterval'
import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    // SPEED,
    DIRECTIONS
} from './snakeComponents/constants'
import { secretKiwi } from './secretKiwi'
import './snakeComponents/snake.css'

function SnakeApp() {

    const canvasRef = useRef();
    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0)
    const [scoreValue, setScoreValue] = useState(20)
    const [SPEED, setSPEED] = useState(100)



    UseInterval(() => gameLoop(), speed);


    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
      };

      const moveSnake = ({ keyCode }) =>
      keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

      const createApple = () =>
      apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

      const checkCollision = (piece, snk = snake) => {
        if (
          piece[0] * SCALE >= CANVAS_SIZE[0] ||
          piece[0] < 0 ||
          piece[1] * SCALE >= CANVAS_SIZE[1] ||
          piece[1] < 0
        )
          return true;
    
        for (const segment of snk) {
          if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
        }
        return false;
      };

      const increaseScore = () => {
        if (scoreValue === 10) {
          setScore(score + scoreValue)
        } else if (scoreValue === 20) {
          setScore(score + scoreValue)
        } else if (scoreValue === 40) {
          setScore(score + scoreValue)
        } else if (scoreValue === 80) {
          setScore(score + scoreValue)
        }
      }

      const checkAppleCollision = newSnake => {
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
          let newApple = createApple();
          while (checkCollision(newApple, newSnake)) {
            newApple = createApple();
          }
          setApple(newApple);
          increaseScore()
          return true;
        }
        return false;
      };

      const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
        snakeCopy.unshift(newSnakeHead);
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        setSnake(snakeCopy);
      };

      // let SPEED = 100

      const chooseSpeed = e => {
        // switch (e.target.value) {
        //   case 'easy':
        //     SPEED = 150
        //     setScoreValue(10)
        //     break;
        //   case 'medium':
        //     SPEED = 100
        //     setScoreValue(20)
        //     break;
        //   case 'hard':
        //     SPEED = 50
        //     setScoreValue(40)
        //     break;
        //   case 'insane':
        //     SPEED = 30
        //     setScoreValue(80)
        //     break;
        // }

        switch (e.target.value) {
          case 'easy':
            setSPEED(150)
            setScoreValue(10)
            break;
          case 'medium':
            setSPEED(100)
            setScoreValue(20)
            break;
          case 'hard':
            setSPEED(50)
            setScoreValue(40)
            break;
          case 'insane':
            setSPEED(30)
            setScoreValue(80)
            break;
        }
      }

      const startGame = () => {
        setSnake(SNAKE_START);
        setApple(APPLE_START);
        setDir([0, -1]);
        setSpeed(SPEED);
        setScore(0)
        setGameOver(false);
      };

      useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "#676516";
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = "#676516";
        context.fillRect(apple[0], apple[1], 1, 1);
      }, [snake, apple, gameOver]);

    return (

        <div className="snakeGameCont" role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>

            <Link to='game-select'><i className="fas fa-angle-double-left goToSelect"></i></Link>

            <div className='snakeStartBtnCont'>

                <h1 className="pretendo snakeTitle">SNAKE</h1>

                <button className="snakeStartBtn" onClick={startGame}>Start Game</button>

                <div className='speed-select-cont'>
                  <h2>Choose Difficulty:</h2>
                  <div className="speed-btn-cont">
                    <button className="speed-btn speed-easy-btn" value='easy' onClick={chooseSpeed}>Easy</button>
                    <button className="speed-btn speed-medium-btn" value='medium' onClick={chooseSpeed}>Medium</button>
                    <button className="speed-btn speed-hard-btn" value='hard' onClick={chooseSpeed}>Hard</button>
                    <button className="speed-btn speed-insane-btn" value='insane' onClick={chooseSpeed}>Insane</button>
                  </div>
                </div>

                <div className="gameOverCont">
                    {gameOver && <div className="snake-game-over">GAME OVER!</div>}
                </div>
            </div>
            
            
            <div className='snakeCanvasCont'>
                <canvas
                    className="snakeCanvas"
                    ref={canvasRef}
                    width={`${CANVAS_SIZE[0]}px`}
                    height={`${CANVAS_SIZE[1]}px`}
                />
                <div className='score-cont'>
                  <h2>SCORE: {score}</h2>
                </div>

            </div>
            
            

            <div className="snakeRulesCont">
                <h1 className="snakeRulesTitle">RULES</h1>
                
                <ul className="rulesContent">
                    <li><h4>Use the arrow keys to maneuver snake</h4></li>
                    <li><h4>Eat the dot to grow bigger</h4></li>
                    <li><h4>Don't crash into the walls or yourself or you die</h4></li>
                </ul>
                <i onClick={secretKiwi} className="snakeSecretKiwi fas fa-kiwi-bird"></i>
            </div>
            
            
        </div>
        
    )
}

export default SnakeApp