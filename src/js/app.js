import Board from './Board';
import Goblin from './Goblin';
import GamePlay from './GamePlay';

const board = new Board();
const goblin = new Goblin();

const gameplay = new GamePlay(board, goblin);

gameplay.init();
