import React from 'react';

export default class Piece extends React.Component {
  render(){

    let {action, index, content} = this.props;

    let q = Math.floor(index / 3); //[0,2] //row
    let r = index % 3; //[0,2] //column

    let borderTop = q ? '1px solid black' : 'none';
    let borderLeft = r ? '1px solid black': 'none';

    let styles = {
      width: '50',
      height: '50',
      position: 'absolute',
      left: 0 + 50 * r,
      top: 0 + 50 * q,
      borderTop: borderTop,
      borderLeft: borderLeft
    };

    return (<div key={index} onClick={action.bind(this,index)} style={styles}>{content}</div>);
  }
}
