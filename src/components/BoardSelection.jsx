import React, { useState } from 'react'
import { motion } from 'framer-motion'

const BoardSelection = ({ onStart }) => {
  const [boardSize, setBoardSize] = useState(3)
  const [player1Color, setPlayer1Color] = useState('#FF0000')
  const [player2Color, setPlayer2Color] = useState('#0000FF')

  const handleStart = () => {
    onStart({ boardSize, player1Color, player2Color })
  }

  return (
    <motion.div
      className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-96 max-w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Game Settings</h2>
      <div className="mb-6">
        <label className="block mb-2 text-lg text-purple-600 font-semibold">Board Size:</label>
        <motion.select
          value={boardSize}
          onChange={(e) => setBoardSize(Number(e.target.value))}
          className="w-full p-3 border rounded-md text-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <option value={3}>3x3</option>
          <option value={4}>4x4</option>
          <option value={5}>5x5</option>
        </motion.select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg text-purple-600 font-semibold">Player 1 Color:</label>
        <motion.input
          type="color"
          value={player1Color}
          onChange={(e) => setPlayer1Color(e.target.value)}
          className="w-full h-12 rounded-md cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg text-purple-600 font-semibold">Player 2 Color:</label>
        <motion.input
          type="color"
          value={player2Color}
          onChange={(e) => setPlayer2Color(e.target.value)}
          className="w-full h-12 rounded-md cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        />
      </div>
      <motion.button
        onClick={handleStart}
        className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Game
      </motion.button>
    </motion.div>
  )
}

export default BoardSelection