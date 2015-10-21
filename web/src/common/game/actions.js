import Flux from './../../flux';
import ActionTypes from './action-types';
import {isSelectedPieceValid} from './getters';

export default (payload) => {
  Flux.dispatch(ActionTypes.CLICK, payload);
  // if the player selects a valid piece change the current player
  if (Flux.evaluate(isSelectedPieceValid)){
    Flux.dispatch(ActionTypes.UPDATEBOARD);
    Flux.dispatch(ActionTypes.NEXTPLAYER);
  }
}
