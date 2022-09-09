import React, { useState } from "react";
import Confetti from 'react-confetti'
import Square from "./Square";

const Board = () => {
  // const [square, setSquare] = useState(Array(9).fill(null));
  // const [nextTurn,setnextTurn]= useState('X')
  const [history, setHistory]= useState([
    {board:Array(9).fill(null), nextTurn:'X'}
  ])
  const [currentIndex, setCurrentIndex]= useState(0) 
  const winner= calcWinner(history[currentIndex].board);
  let status;
  if(winner){
    <Confetti/>
    status ='winner :'  + winner;
     
  }else{
    status = 'Player turn :' + history[currentIndex].nextTurn
  }
  const handleClick=(i)=>{
      const board= history[currentIndex].board.slice(); //returns selected elements in an array, as a new array.
      console.log(board)
      if(board[i] === null){
        board[i]= history[currentIndex].nextTurn;
        const nextTurn =history[currentIndex].nextTurn=== 'O' ?'X' :'O'
     
        setHistory(history.concat([{board:board, nextTurn:nextTurn}]))
        // setnextTurn(nextTurn === 'O'?'X' :'O');
        setCurrentIndex(currentIndex+1  )     
         
      }
     else{
      alert('cant do')
     }
        
   
      
  };


  const jumpTo= (index)=>{
    setCurrentIndex(index);
    // setHistory({nextTurn:(index % 2) === 0})

  }
  const renderSquare = (i) => {
   
    return <Square  disabled={winner} board={history[currentIndex].board[i]} onClick={()=>handleClick(i)}/>;
  }
  function calcWinner(board){
    const lines=[    //winningg moves positions
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];
    for(let i=0; i< lines.length; i++){
      const[a,b,c]= lines[i]  //0,1,2: i=0
      if(board[a] && board[a] === board[b] && board[a] === board[c]) {  //checking for null 
        return  board[a]
       
      }   
    }
      return null
  }

  return (
    <div className="board">
      {winner && <Confetti/>}

      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      {/* git config --global user.email "jha.gayatri01@gamil.com" */}
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
       {status}
       <ol>{history.map( (el,index)=>{
         return (
          <ol key={index}>
              <button onClick={()=>jumpTo(index)}>{ index ? `Go to move # ${index} `: `Go to start`}</button>
          </ol>
       )
       })}</ol>

    </div>
  );
};

export default Board;
