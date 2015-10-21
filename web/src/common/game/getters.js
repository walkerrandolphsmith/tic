import Nuclear from 'nuclear-js';
let Immutable = Nuclear.Immutable;

export const isSelectedPieceValid = [
  ['game', 'selectedPiece'],
  ['game', 'board'],
  function(selectedPiece, board){
    return board.get(selectedPiece) === '_';
  }
]

export const currentPlayer = [
  ['player', 'currentPlayer'],
  function(currentPlayer){
    return currentPlayer;
  }
]

export const board = [
  ['game', 'board'],
  ['player', 'currentPlayer'],
  function(board, currentPlayer){
    let newBoard = board.map((e)=>({ isEmpty: e === '_', player: e }));
    let { winner, seq } = getWinner(board.toArray());

    return {
      board: newBoard,
      player: currentPlayer,
      winner: winner,
      seq: seq
    };
  }
]

//b is a one dimensional array that represents a 3 x 3 grid
function getWinner(b){
  let seqs = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  let w = seqs.filter((e)=> {
    let [x, y, z] = e;
    return !(b[x] === '_' || b[x] !== b[y] || b[y] !== b[z]);
  })[0];

  return {
    winner: w ? b[w[0]]: false,
    seq: w ? w : []
  }
}
