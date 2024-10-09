import React, { useState } from 'react'
import BoardSelection from './components/BoardSelection'
import Game from './components/Game'
import GameHistory from './components/GameHistory'
import GalaxyBackground from './components/GalaxyBackground'

function App() {
  const [settings, setSettings] = useState(null)
  const [activeTab, setActiveTab] = useState('game')

  const startGame = (newSettings) => {
    setSettings(newSettings)
    setActiveTab('game')
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {!settings && <GalaxyBackground />}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4 text-white">Tic Tac Toe</h1>
        {!settings ? (
          <BoardSelection onStart={startGame} />
        ) : (
          <>
            <div className="mb-4">
              <button
                className={`px-4 py-2 mr-2 ${activeTab === 'game' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => setActiveTab('game')}
              >
                Game
              </button>
              <button
                className={`px-4 py-2 ${activeTab === 'history' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => setActiveTab('history')}
              >
                History
              </button>
            </div>
            {activeTab === 'game' ? (
              <Game settings={settings} onNewGame={() => setSettings(null)} />
            ) : (
              <GameHistory />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App