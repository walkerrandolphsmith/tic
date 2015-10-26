import React from 'react';
import Board from './Board';
import { nuclearComponent } from 'nuclear-js-react-addons';

@nuclearComponent((props) => {
    return {
        board: props.board
    };
})

export default class GameComponent extends React.Component {
  render(){
    let {board, player, winner, seq} = this.props.board;
    return (<Board action={this.props.action} board={board} player={player} winningSequence={seq} />);
  }
}
