
import { useState } from 'react';
import './App.css';

function App() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
 
let boxIndex = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

  const handleClick = (index: number) => {
    const newGameBoard = [...gameBoard];
    newGameBoard[index] = isXNext ? 'X' : 'O';
    setGameBoard(newGameBoard);
    setIsXNext(!isXNext);
  }

  
    for (let i = 0; i < boxIndex.length; i++) {
      const [a, b, c] = boxIndex[i];
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        return gameBoard[a];
      }
  



  return (
    <div className="App">
    <h1>Tic-Tac-Toe</h1>
    { isXNext ? <h2>X's Turn</h2> : <h2>O's Turn</h2> }
    <div className="game-board">
      {gameBoard.map((i, index) => (
        <div
      className='box'
    key={index}
    onClick={() => {handleClick(index);}}
    >
          {i}

        </div>
      ))}
    </div>
    </div>
  );
}
}

export default App
