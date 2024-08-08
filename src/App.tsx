import Message from "./component/message"
import Drawing from "./component/drawing"
import Word from "./component/word"
import Keyboard from "./component/keyboard"
import './style.css'
import { useCallback, useEffect, useState } from "react"
import words from './listofWords.json'
import Scoreboard from "./component/scoreboard"


function App() {
  const getNewWord = () => {
    return words[Math.floor(Math.random()*words.length)]
  }
  const [score, setScore] = useState({
    wins: 0,
    losses: 0
  })

  const [word, setWord] = useState(getNewWord)
  const [guesses, setGuesses] = useState<string[]>([])
  const wrongGuesses = guesses.filter(
    letter => !word.includes(letter)
  )

  const lost = wrongGuesses.length >= 12;
  const won = word.split("").every(letter => guesses.includes(letter));
  const attemptsLeft = 12 - wrongGuesses.length;

  const addGuessedLetter = useCallback((letter: string) => {
    if (guesses.includes(letter) || won || lost) {
      return;
    }
    setGuesses(prev => [...prev, letter])
  }, [guesses, won, lost])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) {
        return
      }
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guesses])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") {
        return
      }
      e.preventDefault()
      setWord(getNewWord)
      setGuesses([])
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  useEffect(() => {
    setScore(prev => ({
      ...prev,
      wins: won ? prev.wins + 1 : prev.wins,
      losses: lost ? prev.losses + 1 : prev.losses,
    }));
  }, [won, lost]);

  const activeLetters = guesses.filter(letter => word.includes(letter))

  return (
    <div className="app-container">
      <div className="app">
        <Message attemptsLeft={attemptsLeft} won={won} lost={lost}/>
        <Drawing numberofGuesses={wrongGuesses.length}/>
        <Word word={word} guesses={guesses} reveal={lost}/>
        <Keyboard activeLetters={activeLetters} inactiveLetters={wrongGuesses} addGuessedLetter={addGuessedLetter} disable={won || lost}/>
      </div>
      <div className="scoreboard">
        <Scoreboard wins={score.wins} losses={score.losses}/>
      </div>
    </div>
  )
}

export default App
