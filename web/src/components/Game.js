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

    let gameStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }

    let backgroundColor = null;
    switch (winner) {
      case 'X':
        backgroundColor = 'green';
        break;
      case 'O':
        backgroundColor = 'blue';
        break;
      default:
        backgroundColor = 'white';
    }
    gameStyle['backgroundColor'] = backgroundColor;

    return (
      <div className="game" style={gameStyle}>
        <Board action={this.props.action} board={board} player={player} winningSequence={seq} color={backgroundColor} />
      </div>
    );
  }
}
