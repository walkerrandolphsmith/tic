import Nuclear from 'nuclear-js';
import ActionTypes from './../action-types';

export default Nuclear.Store({
  initialize: function() {
    this.on(ActionTypes.NEXTPLAYER, nextPlayer)
  },

  getInitialState: function() {
    return Nuclear.toImmutable({
      currentPlayer: 'X'
    })
  },
})

function nextPlayer(state) {
  let nextPlayer = state.get('currentPlayer') === 'X' ? 'O' : 'X';
  let newState = state.set('currentPlayer', nextPlayer);
  return newState;
}
