//
// Your implementations
// 

let playerOneScore = 0
let pleyerTwoScore = 0

let game : Array<Array<number>> = [[15,40],[30,40],[10,30]]

for (let i = 0; i < game.length; i++) {
    DecidePlayerWinEachRound(i[0],i[1])

function DecidePlayerWinEachRound(player1Points : number, player2Points : number) : Game {
    switch (player1Points - player2Points) {
        case -40:
            //player 2 wins
            updateGameResult(0,1)
            break; 
        case -30:
            // player2 Advantage
            break;
        case -25:
            // player2 Advantage
            break; 
        case -15:
            // player2 Advantage
            break; 
        case -10:
            // player2 Advantage
            break;
        case 0:
            // deuce
            updateGameResult(1,1)
            break;
        case 10:
            // player1 Advantage
            break;
        case 15:
            // player1 Advantage
            break; 
        case 25:
            // player1 Advantage
            break;
        case 30:
            // player 1 wins
            updateGameResult(1,0)
            break;
        case 40:
            // player 1 wins
            updateGameResult(1,0)
            break;
        default:
            break;
    }
}

function updateGameResult(player1Score : number, player2Score : number) {
    playerOneScore = playerOneScore + player1Score
    pleyerTwoScore = pleyerTwoScore + player2Score
    decideGameWinner(playerOneScore,pleyerTwoScore)
}


function decideGameWinner(player1Score:number,player2Score:number) {
    const gameresult = player1Score - player2Score
    if (gameresult > 2 && player1Score >= 4) {
        // player one wins
        console.log('player1 wins');
    } else if (gameresult > -2 && player2Score >= 4) {
        // player 2 wins
        console.log('player2 wins');
    } else {
        // the game didn't finish yet
    }


}

}

interface Game {
    pleyer1Ponts : number
    player2Points : number
}