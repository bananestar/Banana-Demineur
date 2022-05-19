// © 2022 Simon Vander Linden

import createVirtualGrid from './createVirtualGrid.js';
import createHTMLGrid from './createHTMLGrid.js';
import addBombe from './addBombe.js';
import scanArea from './scanArea.js';
import addEvenListeners from './addEvenListeners.js';

// Creation Grille 100x100 virtuelle
const grid = createVirtualGrid();

// Ajout des Bombes (10)
addBombe(grid);

// Scan/Numeration case
scanArea(grid);

// Integration Grille HTML
createHTMLGrid(grid);

// Ajout Even clicks
addEvenListeners(grid);

console.table(grid);