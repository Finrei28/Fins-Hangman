const keys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
]

type KeyBoardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disable: boolean
}

export default function keyboard({activeLetters, inactiveLetters, addGuessedLetter, disable=false}: KeyBoardProps) {
    return (
        <div className="keyboard">
            {keys.map(key => {
                const isActive = activeLetters.includes(key.toLowerCase())
                const isInactive = inactiveLetters.includes(key.toLowerCase())
                return (
                    <button onClick={()=>addGuessedLetter(key.toLowerCase())} key={key} className={`${"keyboard-keys"} ${isActive ? "keyboard-keys active" : ""} ${isInactive ? "keyboard-keys inactive" : ""}`} disabled={isActive || isInactive || disable}>{key}</button>
                )
            })}
        </div>
    )
}