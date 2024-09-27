'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

export function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) {
      return
    }
    const newBoard = board.slice()
    newBoard[i] = xIsNext ? 'X' : 'O'
    setBoard(newBoard)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i) => (
    <Button
      onClick={() => handleClick(i)}
      className="h-16 w-16 text-2xl"
      variant={board[i] ? "default" : "outline"}
    >
      {board[i]}
    </Button>
  )

  const winner = calculateWinner(board)
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (board.every(Boolean)) {
    status = 'Draw'
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Tic-Tac-Toe</h3>
      <div className="mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((_, i) => (
          <React.Fragment key={i}>{renderSquare(i)}</React.Fragment>
        ))}
      </div>
      <Button onClick={resetGame} className="w-full">
        Reset Game
      </Button>
    </div>
  )
}