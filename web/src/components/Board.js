import React from 'react';
import Piece from './Piece';
import _ from 'lodash';

export default class Board extends React.Component {
  render(){

    let {action, board, player, winningSequence, color} = this.props;

    let size = 600;

    let boardStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: `${size}px`,
      width: `${size}px`,
      margin: '0px auto'
    }

    let rowStyle = {
      flex: '1',
      display: 'flex'
    }

    let pieces = board.map((e, i)=> {
      let content = e.isEmpty ? '' : e.player;
      let isWinningPiece = _.contains(winningSequence, i);
      return (<Piece key={i} index={i} action={action} content={content} isWinningPiece={isWinningPiece} size={size} color={color}  />);
    });

    pieces = _.chunk(pieces.toArray(), 3).map((group, i)=> {
      return (<div key={i} className='row' style={rowStyle}>{group}</div>)
    });

    return (<div className='board' style={boardStyle}>{pieces}</div>);
  }
}
