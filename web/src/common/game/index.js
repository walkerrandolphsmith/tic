import Flux from './../../flux';
import Actions from './actions';
import Getters from './getters';
import GameStore from './stores/game-store';

Flux.registerStores({
  game: GameStore
});

export default {
  actions: Actions,
  getters: Getters
}
