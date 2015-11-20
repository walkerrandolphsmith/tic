import React from 'react';

export default class Piece extends React.Component {
  render(){

    let {action, index, content, isWinningPiece, size, color} = this.props;

    let q = Math.floor(index / 3); //[0,2] //row
    let r = index % 3; //[0,2] //column

    let borderColorTop = q ? 'black' : 'transparent';
    let borderColorLeft = r ? 'black' : 'transparent';
    let cursor = content ? 'default' : 'pointer';

    let pieceSize = Math.floor(size / 3);

    let styles = {
      width: `${pieceSize}px`,
      height: `${pieceSize}px`,
      fontSize: '5em',
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
      borderTopStyle: 'solid',
      borderLeftStyle: 'solid',
      borderTopColor: borderColorTop,
      borderLeftColor: borderColorLeft,
      background: color,
      cursor: cursor
    };

    return (<div
      key={index}
      className='piece'
      onClick={action.bind(this,index)}
      style={styles}>{content}</div>);
  }
}
