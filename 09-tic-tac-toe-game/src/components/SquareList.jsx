import Square from '@/components/Square';
import { PLAYER1, PLAYER2 } from '@/constants';
import classes from '@/styles/Game.module.css';
import { func, oneOf } from 'prop-types';


function SquareList({squares, handlePlay}) {

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

SquareList.propTypes = {
  squares: oneOf([null, PLAYER1, PLAYER2]), //null 또는 문자
  handlePlay: func,
}

export default SquareList;
