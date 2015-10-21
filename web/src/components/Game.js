import React from 'react';
import Board from './Board';

import Flux from './../flux';
import Game from './../common/game';
import { nuclearComponent } from 'nuclear-js-react-addons';

@nuclearComponent((props) => {
    return {
        board: Game.getters.board
    };
})

export default class GameComponent extends React.Component {
  render(){
    let {board, player} = this.props.board;
    return (<Board action={Game.actions} board={board} player={player} />);
  }
}
