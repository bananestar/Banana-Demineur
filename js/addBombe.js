// © 2022 Simon Vander Linden

const addBombe = (grid) => {
  const maxBombe = 10;
  const bombeCoords = [];

  while (bombeCoords.length < maxBombe) {
    const coord = getRandomCoord(grid);
    bombeCoords.push(coord);
  }
  for (const coord of bombeCoords) {
    grid[coord.col][coord.row] = "B";
  }
  console.table(bombeCoords);
};

const getRandomCoord = (grid) => {
  const col = Math.floor(Math.random() * grid.length);
  const row = Math.floor(Math.random() * grid.length);

  return { col, row };
};
export default addBombe;
