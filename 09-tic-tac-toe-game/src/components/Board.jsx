import classes from '@/styles/Game.module.css';
import SquareList from './SquareList';
import Status from './Status';
import { INITIAL_SQUARES, PLAYER1, PLAYER2 } from '@/constants';
import { useState } from 'react';


function Board() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const [gameIndex, setGameIndex] = useState(0);

  // derived states from component states -> gameIndex에 의해 파생된 상태
  //플레이어 순서 정하고 있었음
  const nextPlayer = gameIndex%2 === 0? PLAYER1 : PLAYER2;
  
  const handlePlay = (index) => () => {
    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;

    setSquares(nextSquares);
    setGameIndex(gameIndex+1);

  };

  return (
    <div className={classes.Board}>
      <Status nextPlayer={nextPlayer}/>
      {/* <h2>승자! : 🟨</h2> */}
      {/* <h2>비겼어요... 😳</h2> */}
      <SquareList squares={squares} handlePlay={handlePlay}/>
    </div>
  );
}

export default Board;
