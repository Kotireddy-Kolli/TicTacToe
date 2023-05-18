import { useEffect, useState } from "react";

function TicTacToe() {
  const board = ["", "", "", "", "", "", "", "", ""];
  const winningCominations =['012','345','678','036','147','258','048','246']
  const [winner, setWinner] = useState(null)
  const [newBoard, setNewBoard] = useState(board);
  const [turn, setTurn] = useState(null);
  const handleClick = (e, index) => {
    console.log(index);
    let updateBoard = [...newBoard];
    updateBoard[index] = turn;
    console.log(updateBoard, turn);
    setNewBoard(updateBoard);
    setTurn((prevTurn) => (prevTurn === 0 ? 1 : 0));
    // checkWinner()
    //Update the Winning Logic
    
  };

  const handleGameRestart = () => {
    setNewBoard(board)
    setWinner(null)
  }
  const checkWinner = ()=> {


  }
  useEffect(() => {
    let toss = Math.floor(Math.random()*2);
    console.log(toss);
    setTurn(toss);
  }, []);
  useEffect(()=> {
    let playerXPositions = ''
    let playerOPositions = ''
    for(let i=0; i<9; i++){
      if(newBoard[i] == '1'){
        playerXPositions += i
      }else if(newBoard[i] == '0'){
        playerOPositions += i
      }
    }
    winningCominations.includes(playerXPositions) ? setWinner('X') : null
    winningCominations.includes(playerOPositions) ? setWinner('O') : null
  },[newBoard])
  return (
    <>
      <div className={`board ${turn ? "x" : "circle"}`}>
        {newBoard.map((el, index) => {
          return (
            <div
              key={index}
              className={`cell ${el === 1 ? "x" : el === 0 ? "circle" : null}`}
              onClick={(e) => handleClick(e, index)}
            ></div>
          );
        })}
      </div>
      <p style={{ textAlign: "center" }}>
        {turn === 1 ? "x" : "circle"}'s turn
      </p>
      {/* Add Reset game functionality */}
      {
        winner !== null ? <button onClick={handleGameRestart}>Restart</button> : null
      }
    </>
  );
}
export default TicTacToe;
