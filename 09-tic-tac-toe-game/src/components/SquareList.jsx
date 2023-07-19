import Square from '@/components/Square';
import { PLAYER1, PLAYER2, WINNER_COLOR } from '@/constants';
import classes from '@/styles/Game.module.css';
import { arrayOf, func, number, oneOf, shape } from 'prop-types';


function SquareList({squares, winner, handlePlay}) {

  return (
    <div className={classes.SquareList}>
      {/* square에는 null, 금색, 검정이 들어올 수 있다 */}
      {squares.map((square, index) => {
        let winnerStyles = null;
        // console.log(winner);
        if(winner){
          const [x,y,z] = winner.condition;
          if(index === x || index === y || index === z){
            winnerStyles= {
              backgroundColor:WINNER_COLOR,
            }
          }
        }
        return (
          <Square key={index} style={winnerStyles} onClick={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

SquareList.propTypes = {
  squares: arrayOf(oneOf([null, PLAYER1, PLAYER2])), //null 또는 문자
  winner:shape({
    player:oneOf([PLAYER1, PLAYER2]),
    condition:arrayOf(number),
  }),
  handlePlay: func,
}

export default SquareList;
