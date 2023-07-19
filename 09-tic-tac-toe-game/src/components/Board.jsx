import { checkWinner, getStatusMessage } from '@/constants.js';
import classes from '@/styles/Game.module.css';
import { func } from 'prop-types';
import { PlayerType } from './Square';
import SquareList from './SquareList';
import { SquaresType } from './SquareList';
import Status from './Status';

function Board({ squares, nextPlayer, onPlay }) {
  const winner = checkWinner(squares); //null | {player, condition}
  const isDraw = !winner && squares.every(Boolean);

  //위너가 없고 squares 배열이 모두 찬 경우

  const statusMessage = getStatusMessage({
    isDraw,
    nextPlayer,
    winner,
  });
  const handlePlay = (index) => () => {
    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;
    if (winner) return globalThis.alert('game over');
    onPlay(nextSquares);
  };

  return (
    <div className={classes.Board}>
      <Status message={statusMessage} />
      {/* <h2>승자! : 🟨</h2> */}
      {/* <h2>비겼어요... 😳</h2> */}
      <SquareList squares={squares} handlePlay={handlePlay} winner={winner} />
    </div>
  );
}

Board.propTypes = {
  squares: SquaresType, //null 또는 문자
  nextPlayer: PlayerType,
  onPlay: func,
};

export default Board;
