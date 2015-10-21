import React from 'react';

export default class Piece extends React.Component {
  render(){

    let {action, index, content} = this.props;

    let q = Math.floor(index / 3); //[0,2] //row
    let r = index % 3; //[0,2] //column

    let width = 50;
    let height = 50;

    let borderColorTop = q ? 'black' : 'transparent';
    let borderColorLeft = r ? 'black' : 'transparent';

    let styles = {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
      borderTopStyle: 'solid',
      borderLeftStyle: 'solid',
      borderTopColor: borderColorTop,
      borderLeftColor: borderColorLeft
    };

    let innerStyles = {
      width: width,
      height: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    return (<div
      key={index}
      className='piece'
      onClick={action.bind(this,index)}
      style={styles}>
        <span
          style={innerStyles}>{content}</span>
    </div>);
  }
}
