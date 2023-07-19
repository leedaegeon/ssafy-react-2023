
export const INITIAL_SQUARES = Array(9).fill(null);

export const PLAYER1 = '⚫️';
export const PLAYER2 = '🟨';
export const WINNER_COLOR='#fefec9';

const getCondition = (conditionString) =>{
    return conditionString.toString().split('').map(Number);
}

const WINNER_CONDITIONS = [
    getCondition('012'),
    getCondition('345'),
    getCondition('678'),
    getCondition('036'),
    getCondition('147'),
    getCondition('258'),
    getCondition('048'),
    getCondition('246'),
    
];
// console.log(WINNER_CONDITIONS);
export const checkWinner = (sqaures) =>{
    // 승자 확인 로직 구현
    // console.log("check",sqaures);
    for(const[x,y,z] of WINNER_CONDITIONS){
        // console.log(x, y, z);
        const player = sqaures[x];
        if(player && player === sqaures[y] && player === sqaures[z]){
            // console.log(player);
            return{
                player,
                condition: [x,y,z],
            }
        }
    }
}
export const getStatusMessage = ({isDraw, nextPlayer, winner}) =>{
    if(winner){
        return `위너: ${winner.player}`;
    }else if(isDraw){
        return `무승부`
    }
    return `플레이어: ${nextPlayer}`;
}