// © 2022 Simon Vander Linden

const scanArea = (grid) => {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid.length; colIndex++) {
      if (grid[rowIndex][colIndex] === "B") {
        /*
         * 0 1 0
         * 0 B 0
         * 0 0 0
         */
        if (typeof grid[rowIndex - 1]?.[colIndex] === "number") {
          grid[rowIndex - 1][colIndex]++;
        }
        /*
         * 0 0 1
         * 0 B 0
         * 0 0 0
         */
        if (typeof grid[rowIndex - 1]?.[colIndex + 1] === "number") {
          grid[rowIndex - 1][colIndex + 1]++;
        }
        /*
         * 0 0 0
         * 0 B 1
         * 0 0 0
         */
        if (typeof grid[rowIndex]?.[colIndex + 1] === "number") {
          grid[rowIndex][colIndex + 1]++;
        }
        /*
         * 0 0 0
         * 0 B 0
         * 0 0 1
         */
        if (typeof grid[rowIndex + 1]?.[colIndex + 1] === "number") {
          grid[rowIndex + 1][colIndex + 1]++;
        }
        /*
         * 0 0 0
         * 0 B 0
         * 0 1 0
         */
        if (typeof grid[rowIndex + 1]?.[colIndex] === "number") {
          grid[rowIndex + 1][colIndex]++;
        }
        /*
         * 0 0 0
         * 0 B 0
         * 1 0 0
         */
        if (typeof grid[rowIndex + 1]?.[colIndex - 1] === "number") {
          grid[rowIndex + 1][colIndex - 1]++;
        }
        /*
         * 0 0 0
         * 1 B 0
         * 0 0 0
         */
        if (typeof grid[rowIndex]?.[colIndex - 1] === "number") {
          grid[rowIndex][colIndex - 1]++;
        }
        /*
         * 1 0 0
         * 0 B 0
         * 0 0 0
         */
        if (typeof grid[rowIndex - 1]?.[colIndex - 1] === "number") {
          grid[rowIndex - 1][colIndex - 1]++;
        }
      }
    }
  }
};
export default scanArea;
