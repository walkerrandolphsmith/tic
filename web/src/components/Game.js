import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  render(){
    return (<Board action={this.props.action} />);
  }
}
