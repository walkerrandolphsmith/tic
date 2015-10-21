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
