import React from 'react'

const GalaxyBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
            <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
            <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
            <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
            <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="rgb(10,10,35)">
          <animate attributeName="x" dur="20s" values="0%;25%;0%" repeatCount="indefinite" />
          <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
          <animate attributeName="width" dur="20s" values="100%;50%;100%" repeatCount="indefinite" />
          <animate attributeName="height" dur="21s" values="100%;50%;100%" repeatCount="indefinite" />
        </rect>
        <circle cx="0" cy="0" r="40" fill="url(#Gradient4)">
          <animate attributeName="cx" dur="12s" values="0%;100%;0%" repeatCount="indefinite" />
          <animate attributeName="cy" dur="15s" values="100%;0%;100%" repeatCount="indefinite" />
        </circle>
        <circle cx="100%" cy="0" r="40" fill="url(#Gradient1)">
          <animate attributeName="cx" dur="12s" values="100%;0%;100%" repeatCount="indefinite" />
          <animate attributeName="cy" dur="15s" values="0%;100%;0%" repeatCount="indefinite" />
        </circle>
        <circle cx="100%" cy="100%" r="40" fill="url(#Gradient2)">
          <animate attributeName="cx" dur="12s" values="100%;0%;100%" repeatCount="indefinite" />
          <animate attributeName="cy" dur="15s" values="100%;0%;100%" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="100%" r="40" fill="url(#Gradient3)">
          <animate attributeName="cx" dur="12s" values="0%;100%;0%" repeatCount="indefinite" />
          <animate attributeName="cy" dur="15s" values="100%;0%;100%" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

export default GalaxyBackground