import { Board, History } from '@/components';
import useGame from '@/hooks/useGame';
import classes from '@/styles/Game.module.css';

console.log(classes);

export default function Game() {
  const {
    squares,
    gameIndex,
    currentSquare,
    nextPlayer,
    playGame,
    timeTravel,
  } = useGame();
  return (
    <div className={classes.Game}>
      <Board
        squares={currentSquare}
        nextPlayer={nextPlayer}
        onPlay={playGame}
      />
      <History
        squares={squares}
        onTimeTravel={timeTravel}
        gameIndex={gameIndex}
      />
    </div>
  );
}
