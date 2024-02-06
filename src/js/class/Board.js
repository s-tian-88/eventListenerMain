import { random } from '../utils';

export default class Board {

  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    };
    this.container = container;
    this.defaultSpeed = 1000;
  };

  createBoard(lvl = 3) {

    const html = "<div class='title'>\
      <span class='title-label'>Нашествие гоблинов</span>\
      </div><div class='controls'>\
      <button data-id='action-new' class='btn'>Новая игра</button></div>\
      <div class='board-container'>\
      <div data-id='board' class='board'></div>\
      </div>";

    this.container.innerHTML = html;

    const board = this.container.querySelector('.board');

    for (let i = 0; i < lvl ** 2; i++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      board.appendChild(cellElement);
    };
  };
};
