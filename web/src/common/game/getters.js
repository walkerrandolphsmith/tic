import Nuclear from 'nuclear-js';
let Immutable = Nuclear.Immutable;


export default [
  ['board'],
  function(board){
    console.log("I am a getter", board);
  }
];
