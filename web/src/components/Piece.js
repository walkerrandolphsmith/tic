import React from 'react';

export default class Piece extends React.Component {
  render(){

    let q = Math.floor(this.props.index / 3); //[0,2] //row
    let r = this.props.index % 3; //[0,2] //column

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

    return (<div key={this.props.index} onClick={this.props.action.bind(this,this.props.index)} style={styles}></div>);
  }
}
