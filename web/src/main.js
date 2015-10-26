import React from 'react';
import ReactDom from 'react-dom';
import GameComponent from './components/Game';

import Nuclear from 'nuclear-js';
import provideReactor from 'nuclear-js-react-addons/provideReactor';
import Flux from './../../common/flux';
import Game from './../../common/game';

let App = provideReactor(GameComponent);

let mountNode = document.getElementById('app');
ReactDom.render(<App reactor={Flux} board={Game.getters.board} action={Game.actions}/>, mountNode);
