import React from 'react';
import Piece from './Piece';

export default class Board extends React.Component {
  render(){

    let styles = {
      position: 'relative',
      width: '150px',
      margin: '0px auto'
    }

    let pieces = [1,2,3,4,5,6,7,8,9].map((e, i)=> {
      return (<Piece key={i} action={this.props.action} index={i} />);
    });

    return (<div style={styles}>{pieces}</div>);
  }
}
