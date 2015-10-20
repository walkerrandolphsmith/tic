import React from 'react';
import ReactDom from 'react-dom';

import Game from './common/game';
import GameComponent from './components/Game';

let mountNode = document.getElementById('app');
ReactDom.render(<GameComponent action={Game.actions} />, mountNode);
