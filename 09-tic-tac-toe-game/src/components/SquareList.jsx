import classes from '@/styles/Game.module.css';
import Square from '@/components/Square';
import { useState } from 'react';

function SquareList() {
  //react component state
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [gameIndex, setGameIndex] = useState(0);

  // derived states from component states
  //플레이어 순서 정하고 있었음
  //   const nextPlayer = gameIndex%2 === 0?

  const handlePlay = (index) => () => {
    console.log(index);
  };

  return (
    <div className={classes.SquareList}>
      {/* square에는 null, 금색, 검정이 들어올 수 있다 */}
      {squares.map((square, index) => {
        return (
          <Square key={index} onClick={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default SquareList;
