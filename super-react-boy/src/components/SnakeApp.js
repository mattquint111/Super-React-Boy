import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UseInterval from './snakeComponents/UseInterval'
import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
} from './snakeComponents/constants'
import { secretKiwi } from './secretKiwi'

function SnakeApp() {

    const canvasRef = useRef();
    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);

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

      const checkAppleCollision = newSnake => {
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
          let newApple = createApple();
          while (checkCollision(newApple, newSnake)) {
            newApple = createApple();
          }
          setApple(newApple);
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

      const startGame = () => {
        setSnake(SNAKE_START);
        setApple(APPLE_START);
        setDir([0, -1]);
        setSpeed(SPEED);
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

            <Link to='game-select'><i class="fas fa-angle-double-left goToSelect"></i></Link>

            <div className='snakeStartBtnCont'>
                <h1 className="pretendo snakeTitle">SNAKE</h1>
                <button className="snakeStartBtn" onClick={startGame}>Start Game</button>
                <div className="gameOverCont">
                    {gameOver && <div>GAME OVER!</div>}
                </div>
            </div>
            
            
            <div className='snakeCanvasCont'>
                <canvas
                    className="snakeCanvas"
                    ref={canvasRef}
                    width={`${CANVAS_SIZE[0]}px`}
                    height={`${CANVAS_SIZE[1]}px`}
                />

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