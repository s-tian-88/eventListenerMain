import Board from './Board';

export default class GamePlay extends Board {
  constructor(container) {
    super(container);
    this.defaultSpeed = 1000;
    this.interval = 0;
  }

  start() {
    this.createBoard();

    let previous = this.getRandomCell();
    previous.classList.add('activated');

    setInterval(() => {
      this.interval += 1;
      const next = this.getRandomCell(previous);
      previous.classList.remove('activated');
      next.classList.add('activated');
      previous = next;
      if (this.interval - this.hits > 5) {
        alert('You lose');
        this.hits = 0;
        this.interval = 0;
      }
    }, this.defaultSpeed);
  }
}
