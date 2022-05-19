// © 2022 Simon Vander Linden

const showEmptyCells = (grid, lost) => {
  if (lost) {
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      for (let colIndex = 0; colIndex < grid.length; colIndex++) {
        // if (grid[rowIndex][colIndex] === "B") {
        //   const el = document.querySelector(
        //     `.cell-row-${rowIndex}-col-${colIndex}`
        //   );
        //   el.classList.remove("cell-hidden");
        //   el.classList.add("cell-bombe");
        // }
        const el = document.querySelector(
          `.cell-row-${rowIndex}-col-${colIndex}`
        );
        switch (grid[rowIndex][colIndex]) {
          case "B":
            el.classList.add("cell-bombe");
            break;
          case 0:
            el.classList.add("cell-empty");
            break;
          case 1:
            el.classList.add("cell-num", "cell-num-1");
            el.classList.remove("cell-hidden");
            el.textContent = "1";
            break;
          case 2:
            el.classList.add("cell-num", "cell-num-2");
            el.classList.remove("cell-hidden");
            el.textContent = "2";
            break;
          case 3:
            el.classList.add("cell-num", "cell-num-3");
            el.classList.remove("cell-hidden");
            el.textContent = "3";
            break;
          case 4:
            el.classList.add("cell-num", "cell-num-4");
            el.classList.remove("cell-hidden");
            el.textContent = "4";
            break;
          case 5:
            el.classList.add("cell-num", "cell-num-5");
            el.classList.remove("cell-hidden");
            el.textContent = "5";
            break;
          default:
            el.classList.remove("cell-hidden");
            break;
        }
      }
    }
  } else {
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
  }
};

export default showEmptyCells;
