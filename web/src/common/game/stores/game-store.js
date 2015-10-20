import Nuclear from 'nuclear-js';
import ActionTypes from './../action-types';

export default Nuclear.Store({
  initialize: function() {
    this.on(ActionTypes.CLICK, clickHandler)
  },

  getInitialState: () => {
    return Nuclear.toImmutable({
      board: [
      '_','_','_',
      '_','_','_',
      '_','_','_'
      ]
    })
  }
})

function clickHandler(state, payload){
  console.log("STATE: ", state.get('board'));
  console.log("PAYLOAD: ", payload);
  return [
  '_','_','_',
  '_','_','_',
  '_','_','_'
  ];
}
