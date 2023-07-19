import classes from '@/styles/Game.module.css';
import SquareList from './SquareList';
import Status from './Status';
import { INITIAL_SQUARES, PLAYER1, PLAYER2, checkWinner, getStatusMessage } from '@/constants.js';
import { useState } from 'react';


function Board() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const [gameIndex, setGameIndex] = useState(0);

  // derived states from component states -> gameIndex에 의해 파생된 상태
  //플레이어 순서 정하고 있었음
  const nextPlayer = gameIndex%2 === 0? PLAYER1 : PLAYER2;
  const winner = checkWinner(squares); //null | {player, condition}
  const handlePlay = (index) => () => {

    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;
    
    setSquares(nextSquares);
    setGameIndex(gameIndex+1);
    if(winner) return globalThis.alert("game over")

  };
  //위너가 없고 squares 배열이 모두 찬 경우
  const isDraw = !winner && squares.every(Boolean);

  const statusMessage = getStatusMessage({
    isDraw,
    nextPlayer,
    winner,
  });
  

  return (
    <div className={classes.Board}>
      <Status message={statusMessage}/>
      {/* <h2>승자! : 🟨</h2> */}
      {/* <h2>비겼어요... 😳</h2> */}
      <SquareList squares={squares} handlePlay={handlePlay} winner={winner}/>
    </div>
  );
}

export default Board;
