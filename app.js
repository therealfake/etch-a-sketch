const gridContainer = document.querySelector("#grid-container");

/**
 * Creates a rows x cols grid
 * @param  {Number} rows number of rows
 * @param  {Number} cols number of columns
 */
function makeGrid(rows, cols) {
    for (c = 0; c < (rows*cols); c++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16,16);