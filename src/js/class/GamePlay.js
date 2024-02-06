import { random } from '../utils';
import Board from './Board';


export default class GamePlay extends Board {

  constructor(container) {
    super(container);
    this.defaultSpeed = 1000;
  };

  start () {

    this.createBoard();

    let previous = this.getRandomCell();
    previous.classList.add('activated');

    setInterval(() => {
      const next = this.getRandomCell(previous);
      previous.classList.remove('activated');
      next.classList.add('activated');
      previous = next;
    }, this.defaultSpeed);

  };

};
