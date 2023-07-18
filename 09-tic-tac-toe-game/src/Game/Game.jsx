// import Board from '@/components/Board.jsx';
// import History from '@/components/History.jsx';
import { Board, History } from '@/components';

import classes from '@/styles/Game.module.css';

console.log(classes);

export default function Game() {
  return (
    <div className={classes.Game}>
      <Board />
      <History />
    </div>
  );
}
