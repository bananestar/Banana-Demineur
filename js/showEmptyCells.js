// © 2022 Simon Vander Linden

const showEmptyCells = (grid) => {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid.length; colIndex++) {
      if (grid[rowIndex][colIndex] === 0) {
        // cell-empty
        const el = document.querySelector(
          `.cell-row-${rowIndex}-col-${colIndex}`
        );
        el.classList.add("cell-empty");
        el.classList.remove("cell-hidden");
      }
      if (grid[rowIndex][colIndex] === 1) {
        // cell-num
        const el = document.querySelector(
          `.cell-row-${rowIndex}-col-${colIndex}`
        );
        el.classList.remove("cell-hidden");
        el.classList.add("cell-num", "cell-num-1");
        el.textContent = "1";
      }
    }
  }
};

export default showEmptyCells;
