import Nuclear from 'nuclear-js';
import ActionTypes from './../action-types';

export default Nuclear.Store({
  initialize: function() {
    this.on(ActionTypes.CLICK, clickHandler)
    this.on(ActionTypes.UPDATEBOARD, updateBoard)
  },

  getInitialState: () => {
    return Nuclear.toImmutable({
      board: [
      '_','_','_',
      '_','_','_',
      '_','_','_'
      ],
      selectedPiece: [-1]
    })
  }
})

function clickHandler(state, payload){
  let newState = state.update('selectedPiece', s => s.set(0, payload));
  return newState
}

function updateBoard(state, payload){
  let i = state.get('selectedPiece').get(0);
  let newState = state.update('board', s => s.set(i, 'X'))
  return newState;
}
