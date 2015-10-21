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
      selectedPiece: -1
    })
  }
})

function clickHandler(state, payload){
  let newState = state.set('selectedPiece', payload);
  return newState
}

function updateBoard(state, payload){
  let i = state.get('selectedPiece');
  let newState = state.update('board', s => s.set(i, 'X'))
  return newState;
}
