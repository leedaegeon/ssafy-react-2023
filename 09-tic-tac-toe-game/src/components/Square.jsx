import classes from '@/styles/Game.module.css';
import { func, node, object} from 'prop-types';

function Square({ children, style, onClick }) {
  // console.log(children);
  return (
    <button className={classes.Square} onClick={onClick} disabled={children} style={style}>
      {children}
    </button>
  );
}

Square.propTypes = {
  children: node,
  onClick: func,
  style: object,
};

export default Square;
