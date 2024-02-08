import random from '../utils';

export default class Board {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    }
    this.container = container;
    this.hits = 0;
    this.misses = 0;

    this.boardClick = this.boardClick.bind(this);
  }

  createBoard(lvl = 3) {
    const html = "<div class='title'>\
      <span class='title-label'>Нашествие гоблинов</span>\
      </div>\
      <div class='board-container'>\
      <div data-id='board' class='board'></div>\
      </div>";

    this.container.innerHTML = html;

    const board = this.container.querySelector('.board');
    board.addEventListener('click', this.boardClick);

    for (let i = 0; i < lvl ** 2; i++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      board.appendChild(cellElement);
    }
  }

  getRandomCell(cellObj = null) {
    const cells = [...this.container.querySelectorAll('.cell')];
    if (!cellObj) {
      return random(cells);
    }
    const index = cells.indexOf(cellObj);
    cells.splice(index, 1);
    return random(cells);
  }

  boardClick(event) {
    const { target } = event;
    if (target.classList.contains('activated')) {
      target.classList.remove('activated');
      this.hits += 1;
    }

    if (this.hits === 5) {
      alert('You win!');
      this.hits = 0;
      this.interval = 0;
    }
  }
}
