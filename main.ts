//
// Your implementations
// 

let playerOneScore = 0
let pleyerTwoScore = 0

let playerOneRoundScore = 0
let playerTwoRoundScore = 0
let playerAdvantage : PlayerAdvantage = .none 

let game : Array<Array<number>> = [[15,40],[30,40],[10,30]]

for (let i = 0; i < game.length; i++) {
    DecidePlayerWinEachRound(i[0],i[1])
}
function DecidePlayerWinEachRound(player1Points : number, player2Points : number) : Game {
    playerOneRoundScore += player2Points
    playerTwoRoundScore += player2Points
    if playerOneRoundScore <= player2Points {
        // player 2 get the advantage
        playerAdvantage = .player2
    }
    if playerTwoRoundScore <= player1Points {
        // player 1 get the advantage
        layerAdvantage = .player1
    }
    switch (playerOneRoundScore - playerTwoRoundScore) {
        case -40:
            //player 2 wins
            resetGameScores()
            updateGameResult(0,1)
            break; 
        case 0:
            // deuce
            switch playerAdvantage {
                case .none:
                    updateGameResult(1,1)
                    break;
                case .player1:
                    updateGameResult(1,0)
                    break;
                case .player2:
                    updateGameResult(0,1)
                    break;
            }
            break;
        case 40:
            // player 1 wins
            resetGameScores()
            updateGameResult(1,0)
            break;
        default:
            // round continues
            break;
    }
}

function resetGameScores() {
    playerOneRoundScore = 0
    playerTwoRoundScore = 0
    playerAdvantage = .none
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

interface Game {
    pleyer1Ponts : number
    player2Points : number
}

interface PlayerAdvantage {
    player1
    player2
    none
}