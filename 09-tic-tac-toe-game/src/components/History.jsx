import classes from '@/styles/Game.module.css';
import { arrayOf, func, number } from 'prop-types';
import { SquaresType } from './SquareList';
function History({ squares, onTimeTravel, gameIndex }) {
  console.log(squares);
  return (
    <div className={classes.History}>
      <ol>
        {squares.map((squares, index) => {
          const isDisabled = gameIndex === index;

          return (
            <li key={index}>
              <button
                type="button"
                onClick={onTimeTravel(index)}
                disabled={isDisabled}
                style={{
                  opacity: isDisabled ? 0.5 : 1,
                }}
              >
                {index === 0 ? '게임시작' : `게임 #${index}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

History.propTypes = {
  squares: arrayOf(SquaresType),
  onTimeTravel: func,
  gameIndex: number,
};

export default History;
