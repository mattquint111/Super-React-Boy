export function calculateWinner(squares) {
    
    // winning move combinations to check
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // loop through winning combinations
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        // check if square is filled -> check if a winning combination exists
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // return the winner's piece (X or O)
            return squares[a]
        }
    }
    return null
}
