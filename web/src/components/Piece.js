import React from 'react';

export default class Piece extends React.Component {
  render(){

    let {action, index, content, isWinningPiece} = this.props;

    let q = Math.floor(index / 3); //[0,2] //row
    let r = index % 3; //[0,2] //column

    let borderColorTop = q ? 'black' : 'transparent';
    let borderColorLeft = r ? 'black' : 'transparent';
    let background = isWinningPiece ? 'green' : 'transparent';
    let cursor = content ? 'default' : 'pointer';

    let styles = {
      width: '50',
      height: '50',
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
      background: background,
      cursor: cursor
    };

    return (<div
      key={index}
      className='piece'
      onClick={action.bind(this,index)}
      style={styles}>{content}</div>);
  }
}
