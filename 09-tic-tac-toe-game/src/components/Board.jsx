import classes from '@/styles/Game.module.css';
import Status from './Status';
import SquareList from './SquareList';

function Board() {
  return (
    <div className={classes.Board}>
      <Status />
      {/* <h2>승자! : 🟨</h2> */}
      {/* <h2>비겼어요... 😳</h2> */}
      <SquareList />
    </div>
  );
}

export default Board;
