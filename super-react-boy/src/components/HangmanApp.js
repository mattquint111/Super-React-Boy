import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './hangmanComponents/Header'
import Figure from './hangmanComponents/Figure'
import WrongLetters from './hangmanComponents/WrongLetters'
import Word from './hangmanComponents/Word'
import Popup from './hangmanComponents/Popup'
// import Notification from './hangmanComponents/Notification'
import {showNotification as show} from './hangmanComponents/helpers'
import initialWords from './hangmanComponents/initialWords'

    let words = initialWords
    let selectedWord = words[Math.floor(Math.random() * words.length)]

    function getRandomWords() {
      fetch('https://random-word-api.herokuapp.com/word?number=20')
        .then(response => response.json())
        .then(result => {
          words = result
        })
    }
    getRandomWords()

function HangmanApp() {
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [showNotification, setShowNotification] = useState(false)

    useEffect(() => {
        const handleKeydown = event => {
          const { key, keyCode } = event;
          if (playable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            } else {
              if (!wrongLetters.includes(letter)) {
                setWrongLetters(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            }
          }
        }
        window.addEventListener('keydown', handleKeydown);
    
        return () => window.removeEventListener('keydown', handleKeydown);
      }, [correctLetters, wrongLetters, playable]);

      function playAgain() {
          setPlayable(true)

          setCorrectLetters([])
          setWrongLetters([])

          const random = Math.floor(Math.random() * words.length)
          selectedWord = words[random] 
      }

    return(
        <div className="hangmanGameCont">
            <div className='hangmanHeaderCont'>
                <Link to='game-select'><i class="fas fa-angle-double-left goToSelect goBackHang"></i></Link>
                <Header />
                <div className='hangHeaderSpacer'></div>
            </div>
            
            <div className='game-container'>
                <Figure wrongLetters={wrongLetters}/>
                <WrongLetters wrongLetters={wrongLetters}/>
                <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
        </div>
    )
}

export default HangmanApp