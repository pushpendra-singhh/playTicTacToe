import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Circle } from 'lucide-react'

const Game = ({ settings, onNewGame }) => {
  const { boardSize, player1Color, player2Color } = settings
  const [board, setBoard] = useState(Array(boardSize).fill(null).map(() => Array(boardSize).fill(null)))
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [winner, setWinner] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (winner || isBoardFull()) {
      setShowPopup(true)
      saveGameResult()
    }
  }, [winner, board])

  const handleCellClick = (row, col) => {
    if (board[row][col] || winner) return

    const newBoard = board.map(row => [...row])
    newBoard[row][col] = currentPlayer
    setBoard(newBoard)

    const gameWinner = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  const checkWinner = (board) => {
    // Check rows, columns, and diagonals
    for (let i = 0; i < boardSize; i++) {
      if (board[i].every(cell => cell === 'X')) return 'Player 1'
      if (board[i].every(cell => cell === 'O')) return 'Player 2'
      if (board.every(row => row[i] === 'X')) return 'Player 1'
      if (board.every(row => row[i] === 'O')) return 'Player 2'
    }

    if (board.every((row, i) => row[i] === 'X')) return 'Player 1'
    if (board.every((row, i) => row[i] === 'O')) return 'Player 2'
    if (board.every((row, i) => row[boardSize - 1 - i] === 'X')) return 'Player 1'
    if (board.every((row, i) => row[boardSize - 1 - i] === 'O')) return 'Player 2'

    return null
  }

  const isBoardFull = () => {
    return board.every(row => row.every(cell => cell !== null))
  }

  const saveGameResult = () => {
    const result = {
      date: new Date().toISOString(),
      winner: winner || 'Tie',
      boardSize,
    }
    const history = JSON.parse(localStorage.getItem('gameHistory') || '[]')
    history.push(result)
    localStorage.setItem('gameHistory', JSON.stringify(history))
  }

  const resetGame = () => {
    setBoard(Array(boardSize).fill(null).map(() => Array(boardSize).fill(null)))
    setCurrentPlayer('X')
    setWinner(null)
    setShowPopup(false)
  }

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-4 bg-white bg-opacity-80 px-4 py-2 rounded"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="font-bold">Current Player: </span>
        {currentPlayer === 'X' ? (
          <X color={player1Color} size={24} className="inline" />
        ) : (
          <Circle color={player2Color} size={24} className="inline" />
        )}
      </motion.div>
      <motion.div
        className="grid gap-2 bg-white bg-opacity-80 p-4 rounded"
        style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <motion.button
              key={`${rowIndex}-${colIndex}`}
              className="w-16 h-16 bg-white border border-gray-300 flex items-center justify-center text-4xl"
              onClick={() => handleCellClick(rowIndex, colIndex)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {cell === 'X' && <X color={player1Color} size={32} />}
              {cell === 'O' && <Circle color={player2Color} size={32} />}
            </motion.button>
          ))
        )}
      </motion.div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {winner ? `${winner} wins!` : "It's a tie!"}
              </h2>
              <motion.div
                className="mb-4 text-4xl"
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                🎉🎊🎉
              </motion.div>
              <motion.button
                onClick={resetGame}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Play Again
              </motion.button>
              <motion.button
                onClick={onNewGame}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                New Game
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Game