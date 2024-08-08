type WordProp = {
    word: string
    guesses: string[]
    reveal?: boolean
}


export default function word({word, guesses, reveal=false}: WordProp) {
    // const [word, setWord] = useState(() => {
    //     return words[Math.floor(Math.random()*words.length)]
    // })
    return (
         <div className="word">
            {word.split("").map((letter, index) => (
                <span className='letter' key={index}>
                    <span style={{visibility: guesses.includes(letter) || reveal ? 'visible' : 'hidden', color: !guesses.includes(letter) && reveal ? "red" : "black"}}>{letter}</span>
                </span>
            ))}
         </div>
    )
}