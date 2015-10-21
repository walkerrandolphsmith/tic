import React from 'react';
import Piece from './Piece';

export default class Board extends React.Component {
  render(){

    let {action, board, player} = this.props;

    let styles = {
      position: 'relative',
      width: '150px',
      margin: '0px auto'
    }

    let pieces = board.map((e, i)=> {
      let content = e.isEmpty ? '' : e.player;
      return (<Piece key={i} action={action} index={i} content={content} />);
    });

    return (<div style={styles}>{pieces}</div>);
  }
}
