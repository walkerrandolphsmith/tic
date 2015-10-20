import Flux from './../../flux';
import ActionTypes from './action-types';
import Getters from './getters';

export default (payload) => {
  Flux.dispatch(ActionTypes.CLICK, payload);
}
