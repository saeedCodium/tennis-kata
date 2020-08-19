//
// Your implementations
// 

let playerOneScore = 0
let pleyerTwoScore = 0

function updateGameResult(player1Score : number, player2Score : number) : {playerOneScore : number,pleyerTwoScore : number} {
    playerOneScore = playerOneScore + player1Score
    pleyerTwoScore = pleyerTwoScore + player2Score
    return {playerOneScore , pleyerTwoScore}
    
}


function DecidePlayerWinEachRound(player1Points : number, player2Points : number) : Game {
    switch (player1Points - player2Points) {
        case -40:
            break; 
        case -30:
            break;
        case -25:
            break; 
        case -15:
            break; 
        case -10:
            break;
        case 0:
            break;
        case 10:
            break;
        case 15:
            break; 
        case 25:
            break;
        case 30:
            break;
        case 40:
            break;
        default:
            break;
    }
}


function decideGameWinner(gameResult : Game) {
    
}


interface Game {
    pleyer1Ponts : number
    player2Points : number
}