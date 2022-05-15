const gridContainer = document.querySelector("#grid-container");
const clearButton = document.querySelector("#clear-button")

clearButton.addEventListener('click', clearGrid)
/**
 * Creates a rows x cols grid
 * @param  {Number} rows number of rows
 * @param  {Number} cols number of columns
 */
function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows*cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", (e) => {e.target.style.backgroundColor="black"})
        gridContainer.appendChild(cell).className = "grid-item";
    }
}

function clearGrid() {
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {cell.style.backgroundColor="white"})
}

makeGrid(16,16);