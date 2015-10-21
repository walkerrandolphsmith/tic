import Nuclear from 'nuclear-js';
let Immutable = Nuclear.Immutable;

export const isSelectedPieceValid = [
  ['game', 'selectedPiece'],
  ['game', 'board'],
  function(selectedPiece, board){
    let s = selectedPiece.get(0);
    let p = board.get(s);
    console.log(p === '_');
    return p === '_';
  }
]
