import Flux from './../../flux';
import ActionTypes from './action-types';
import * as Getters from './getters';

export default (payload) => {
  Flux.dispatch(ActionTypes.CLICK, payload);
  // if the player selects a valid piece, then update board and change the current player
  if (Flux.evaluate(Getters.isSelectedPieceValid)){
    let currentPlayer = Flux.evaluate(Getters.currentPlayer);
    Flux.dispatch(ActionTypes.UPDATEBOARD, currentPlayer);
    Flux.dispatch(ActionTypes.NEXTPLAYER);
  }
}
