import { Board, History } from '@/components';
import { INITIAL_SQUARES, PLAYER1, PLAYER2 } from '@/constants';
import classes from '@/styles/Game.module.css';
import { useState } from 'react';

console.log(classes);

export default function Game() {
  const [squares, setSquares] = useState([INITIAL_SQUARES]);

  //파생된 상태

  const [gameIndex, setGameIndex] = useState(0);
  const currentSquare = squares[gameIndex];
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;

  const playGame = (nextSquares) => {
    setSquares([...squares, nextSquares]);
    setGameIndex(gameIndex + 1);
  };
  const TimeTravel = (index) => () => {
    setGameIndex(index);
    setSquares([...squares.slice(0, index + 1)]);
  };
  return (
    <div className={classes.Game}>
      <Board
        squares={currentSquare}
        nextPlayer={nextPlayer}
        onPlay={playGame}
      />
      <History
        squares={squares}
        onTimeTravel={TimeTravel}
        gameIndex={gameIndex}
      />
    </div>
  );
}
