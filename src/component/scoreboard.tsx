type ScoreboardProps = {
    wins: Number
    losses: Number
}

export default function scoreboard({wins, losses}: ScoreboardProps) {
    return (
        <>
        <div className="scoreboard-header">
        Scoreboard
        </div>
        Wins:{wins} Losses:{losses}
        </>
    )
}