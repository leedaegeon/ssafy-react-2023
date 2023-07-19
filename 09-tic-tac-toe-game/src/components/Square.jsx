import { PLAYER1, PLAYER2 } from '@/constants';
import classes from '@/styles/Game.module.css';
import { func, object, oneOf } from 'prop-types';

function Square({ children, style, onClick }) {
  // console.log(children);
  return (
    <button
      className={classes.Square}
      onClick={onClick}
      disabled={children}
      style={style}
    >
      {children}
    </button>
  );
}
export const PlayerType = oneOf([null, PLAYER1, PLAYER2]);
Square.propTypes = {
  // children: node,
  children: PlayerType,
  onClick: func,
  style: object,
};

export default Square;
