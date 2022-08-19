
import { useState } from 'react';
import './App.css';

function App() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState("X");
 
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


  
    for (let item = 0; item< boxIndex.length; item++) {
      const [a, b, c] = boxIndex[item];
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        alert(`${gameBoard[a]} wins!`);
      }
  
      
  const handleClick = (index: number) => {
    let isXNext2 = isXNext === "X" ? "O" : "X";
    setIsXNext(isXNext2);
     newState[index] = isXNext2;
    setGameBoard (newState);
  }
  const newState= structuredClone(gameBoard);



  return (
    <div className="App">
    <h1>Tic-Tac-Toe</h1>
    { isXNext === "O" ? <h2>X's Turn</h2> : <h2>O's Turn</h2> }
    <div className="game-board">
      {gameBoard.map((item, index) => (
        <div
      className='box'
    key={index}
    onClick={() => handleClick(index)}
    >
          {item}

        </div>
      ))}
    </div>
    </div>
  );
}
}

export default App
