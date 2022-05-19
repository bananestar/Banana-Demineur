// © 2022 Simon Vander Linden

import showEmptyCells from './showEmptyCells.js';

const unveil = ({ col, row, grid, target }) => {
  target.classList.remove("cell-hidden");
  switch (grid[row][col]) {
    case "B":
      // Bombe
      target.classList.add("cell-bombe");
      setTimeout(() => {
        alert("Perdu!");
        window.location = "";
      }, 3000);
      break;
    case 0:
      // empty
      target.classList.add("cell-empty");
      showEmptyCells(grid);
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    default:
      const num = grid[row][col];
      target.classList.add("cell-num",`cell-num-${num}`);
      target.textContent = num;
      break;
  }
};

export default unveil;
