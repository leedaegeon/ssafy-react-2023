import { INITIAL_SQUARES, PLAYER1, PLAYER2 } from '@/constants';
import { useState } from 'react';

function useGame() {
  const [squares, setSquares] = useState([INITIAL_SQUARES]);

  //파생된 상태

  const [gameIndex, setGameIndex] = useState(0);
  const currentSquare = squares[gameIndex];
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;

  const playGame = (nextSquares) => {
    setSquares([...squares, nextSquares]);
    setGameIndex(gameIndex + 1);
  };
  const timeTravel = (index) => () => {
    setGameIndex(index);
    setSquares([...squares.slice(0, index + 1)]);
  };
  return {
    squares,
    gameIndex,
    currentSquare,
    nextPlayer,
    playGame,
    timeTravel,
  };
}

export default useGame;
