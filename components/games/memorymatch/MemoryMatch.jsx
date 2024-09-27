'use client'
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const ICONS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']

export function MemoryMatch() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffledCards = [...ICONS, ...ICONS]
      .sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
    setFlipped([])
    setSolved([])
  }

  const handleClick = (index) => {
    if (flipped.length === 0) {
      setFlipped([index])
      return
    }

    if (flipped.length === 1) {
      setDisabled(true)
      if (index !== flipped[0]) {
        setFlipped([...flipped, index])
      }
      
      if (cards[flipped[0]] === cards[index]) {
        setSolved([...solved, flipped[0], index])
        setFlipped([])
        setDisabled(false)
      } else {
        setTimeout(() => {
          setFlipped([])
          setDisabled(false)
        }, 1000)
      }
    }
  }

  const isFlipped = (index) => flipped.includes(index) || solved.includes(index)

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Memory Match</h3>
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card, index) => (
          <Button
            key={index}
            onClick={() => !disabled && !isFlipped(index) && handleClick(index)}
            className="h-16 text-2xl"
            variant={isFlipped(index) ? "default" : "outline"}
          >
            {isFlipped(index) ? card : '?'}
          </Button>
        ))}
      </div>
      <Button onClick={initializeGame} className="mt-4 w-full">
        Reset Game
      </Button>
    </div>
  )
}