import '../style.css'

type MessageProps = {
    attemptsLeft: number
    won: boolean
    lost: boolean
}

export default function message({attemptsLeft, won, lost}: MessageProps) {
    return (
         <div className='message'>
            {attemptsLeft === 12 && won === false && lost === false && `Let's play Hangman!`}
            {attemptsLeft < 12 && attemptsLeft > 1 && won === false && lost === false && `You have ${attemptsLeft} more tries`}
            {attemptsLeft === 1 && won === false && lost === false && `Last chance!`}
            {won === true && "You won! Press enter to play again"}
            {lost === true && "You died! Press enter to play again"}
         </div>
    )
}