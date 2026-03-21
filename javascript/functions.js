// 2 = border, 1 = wall, 0 = open space
const layout = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

console.log(layout);

const emptySpaceGrid = layout.map((row) =>
    row.map((cell) => (cell === 0 ? 0 : 1))
);

console.log("\nEmpty-space grid (0 = empty, 1 = occupied):");
console.log(emptySpaceGrid);

console.log("\nVisual layout:");
layout.forEach((row) => {
    const visualRow = row
        .map((cell) => {
            if (cell === 2) return "B";
            if (cell === 1) return "W";
            if (cell ===3) return "🚶"
            return "‎ ";
        })
        .join(" ");
    console.log(visualRow);
});

const subjects = ["E", "M", "C", "S"];

subjects.forEach((subject) => {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < 1000) {
        const k = Math.floor(Math.random() * (layout.length - 1));
        const j = Math.floor(Math.random() * (layout[0].length - 1));

        if (
            layout[k][j] === 0 &&
            layout[k + 1][j] === 0 &&
            layout[k][j + 1] === 0 &&
            layout[k + 1][j + 1] === 0
        ) {
            layout[k][j] = subject;
            layout[k + 1][j] = subject;
            layout[k][j + 1] = subject;
            layout[k + 1][j + 1] = subject;
            placed = true;
        }

        attempts++;
    }

    if (!placed) {
        console.log(`Warning: Could not place ${subject} in a group of 4.`);
    }
});

console.log("\nLayout with subjects:");
layout.forEach((row) => {
    const visualRow = row
        .map((cell) => {
            if (cell === 2) return "B";
            if (cell === 1) return "W";
            if (cell === 3) return "🚶";
            if (typeof cell === "string") return cell;
            return ".";
        })
        .join(" ");
    console.log(visualRow);
});
console.log(layout);

// Render the grid to the HTML page
function renderGrid() {
    const container = document.getElementById("grid-container");
    const cols = layout[0].length;
    container.style.gridTemplateColumns = `repeat(${cols}, 36px)`;

    layout.forEach((row) => {
        row.forEach((cell) => {
            const div = document.createElement("div");
            div.classList.add("grid-cell");

            if (cell === 2) {
                div.classList.add("cell-border");
            } else if (cell === 1) {
                div.classList.add("cell-wall");
            } else if (cell === 3) {
                div.classList.add("cell-player");
                div.textContent = "🚶";
            } else if (typeof cell === "string") {
                div.classList.add(`cell-${cell}`);
                div.textContent = cell;
            } else {
                div.classList.add("cell-open");
            }

            container.appendChild(div);
        });
    });
}




renderGrid();

// =============================================================
// HOW TO BUILD A BFS FOR THIS PROGRAM
// =============================================================
//
// GOAL: Find the shortest path from the player to a subject letter
//       (E, M, C, or S) navigating through the open spaces of the grid.
//
// STEP 1 — UNDERSTAND THE GRID
//   Before writing anything, understand what each cell value means.
//   Open spaces are the only cells the player can walk through.
//   Walls, borders, and other occupied cells must be treated as blocked.

function BFS(grid,row,col,target){

    startPOS = grid[1][9]
    
    var queue 


}

// STEP 3 — SET UP A QUEUE
//   BFS explores cells level by level using a queue (first in, first out).
//   Add the starting position to the queue along with the path taken so far.
//   Create a "visited" tracker so you never process the same cell twice.
//
// STEP 4 — DEFINE MOVEMENT DIRECTIONS
//   The player can move in 4 directions: up, down, left, right.
//   Represent these as row/column offsets you apply to the current position.
//
// STEP 5 — RUN THE MAIN LOOP
//   While the queue is not empty:
//     a) Take the first item off the front of the queue.
//     b) Check if the current cell is the target letter — if so, you're done.
//     c) For each of the 4 directions, calculate the neighbouring cell.
//     d) If the neighbour is within the grid bounds, not yet visited,
//        and is either open space or the target letter, add it to the queue
//        with the updated path and mark it as visited.
//
// STEP 6 — RETURN THE RESULT
//   When the target is found, return the path (list of coordinates) and
//   the distance (number of steps taken).
//   If the queue empties without finding the target, return a "not found" result.
//
// STEP 7 — USE THE RESULT
//   Once you have the path, you can use it to move the player step by step,
//   highlight the route on the rendered grid, or simply log the distance.
//
// =============================================================




