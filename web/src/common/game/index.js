import Flux from './../../flux';
import Actions from './actions';
import * as Getters from './getters';
import GameStore from './stores/game-store';
import PlayerStore from './stores/player-store';

Flux.registerStores({
  game: GameStore,
  player: PlayerStore
});

export default {
  actions: Actions,
  getters: Getters
}
