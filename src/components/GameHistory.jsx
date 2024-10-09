import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GameHistory = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('gameHistory') || '[]')
    setHistory(storedHistory)
  }, [])

  return (
    <motion.div
      className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Game History</h2>
      {history.length === 0 ? (
        <p>No games played yet.</p>
      ) : (
        <ul>
          {history.map((game, index) => (
            <motion.li
              key={index}
              className="mb-2 p-2 bg-gray-100 rounded"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="font-bold text-purple-600">{new Date(game.date).toLocaleString()}</span>
              <br />
              Winner: <span className="text-blue-500">{game.winner}</span>, Board Size: <span className="text-green-500">{game.boardSize}x{game.boardSize}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default GameHistory