import Nuclear from 'nuclear-js';
import ActionTypes from './../action-types';

export default Nuclear.Store({
  initialize: function() {
    this.on(ActionTypes.NEXTPLAYER, nextPlayer)
  },

  getInitialState: function() {
    return Nuclear.toImmutable({
      nextPlayer: nextPlayer('O')
    })
  },
})

function nextPlayer(state) {
  console.log("state", state);
  return state === 'X' ? 'O' : 'X';
}
