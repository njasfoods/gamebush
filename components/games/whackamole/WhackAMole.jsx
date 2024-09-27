'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"

export function WhackAMole() {
  const [score, setScore] = useState(0)
  const [moles, setMoles] = useState(Array(9).fill(false))
  const [gameActive, setGameActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)

  const startGame = useCallback(() => {
    setScore(0)
    setTimeLeft(30)
    setGameActive(true)
  }, [])

  const whackMole = useCallback((index) => {
    if (moles[index] && gameActive) {
      setScore((prev) => prev + 1)
      setMoles(prevMoles => {
        const newMoles = [...prevMoles]
        newMoles[index] = false
        return newMoles
      })
    }
  }, [moles, gameActive])

  useEffect(() => {
    let interval = null

    if (gameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
        setMoles(prevMoles => prevMoles.map(() => Math.random() < 0.3))
      }, 1000)
    } else if (timeLeft === 0) {
      setGameActive(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [gameActive, timeLeft])

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Whack-a-Mole</h3>
      <div className="mb-4">
        <p>Score: {score}</p>
        <p>Time Left: {timeLeft}s</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {moles.map((mole, index) => (
          <Button
            key={index}
            onClick={() => whackMole(index)}
            className={`h-16 ${mole ? 'bg-brown-500' : 'bg-green-500'}`}
            disabled={!gameActive}
          >
            {mole ? '🐭' : ''}
          </Button>
        ))}
      </div>
      <Button onClick={startGame} className="mt-4 w-full" disabled={gameActive}>
        {gameActive ? 'Game in Progress' : 'Start Game'}
      </Button>
    </div>
  )
}