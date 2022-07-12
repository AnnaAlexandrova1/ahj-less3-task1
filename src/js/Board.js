export default class Board {
  constructor() {
    this.board = null;
  }

  drowBoard(number) {
    const board = document.createElement('div');
    board.classList.add('board');

    for (let i = 0; i < Math.floor(number) ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }

    this.board = board;
    console.log(this.board);
  }

  getBoard(number) {
    this.drowBoard(number);
    return this.board;
  }
}
