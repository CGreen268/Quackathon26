// 2 = border, 1 = wall, 0 = open space
const layout = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2],
    [2, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2],
    [2, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
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

const subjects = ["E", "M", "C", "S", "H", "A", "P"];

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
    container.innerHTML = "";
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
            } else if (cell === 4) {
                div.classList.add("cell-walked");
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

// Map each subject option to its grid colour
const subjectColours = {
    English:   "#4365e2",
    Maths:     "#e24343",
    Computing: "#43b043",
    Science:   "#e2a843",
    History:   "#7a4cc2",
    Art:       "#d96c2f",
    Physics:   "#2f9ca8",
};

// Map full subject names to their single letter representations
const subjectCodes = {
    English: "E",
    Maths: "M",
    Computing: "C",
    Science: "S",
    History: "H",
    Art: "A",
    Physics: "P"
};

// Variable to store the selected subject
let selectedSubject = "English"; // Default value

function updateDropdownColour() {
    const select = document.getElementById("subject-select");
    const colour = subjectColours[select.value];
    select.style.borderColor = colour;
    select.style.color = colour;
    select.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${encodeURIComponent(colour)}' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`;
}

// Function to update the selected subject variable
function updateSelectedSubject() {
    const select = document.getElementById("subject-select");
    selectedSubject = select.value;
    console.log("Selected subject:", selectedSubject); // For debugging
}

// Set colour on page load and whenever the selection changes
updateDropdownColour();
document.getElementById("subject-select").addEventListener("change", updateDropdownColour);
document.getElementById("subject-select").addEventListener("change", updateSelectedSubject);

function BFS(grid, target) {


    let startRow = 1;
    let startCol = 17; 


    const queue = [[startRow, startCol, [[startRow, startCol]]]];
    const visited = new Set();
    visited.add(`${startRow},${startCol}`);


    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

   
    while (queue.length > 0) {
        const [r, c, path] = queue.shift();

    
        if (grid[r][c] === target) {
            return {
                found: true,
                position: [r, c],
                path: path,
                distance: path.length - 1
            };
        }

        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;
            const key = `${newRow},${newCol}`;


            if (
                newRow >= 0 && newRow < grid.length &&
                newCol >= 0 && newCol < grid[0].length &&
                !visited.has(key) &&
                (grid[newRow][newCol] === 0 || grid[newRow][newCol] === target)
            ) {
                visited.add(key);
                queue.push([newRow, newCol, [...path, [newRow, newCol]]]);
            }
        }
    }

    return { found: false, position: null, path: [], distance: -1 };
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showPath(path){
    for(x = 0; x < path.length-2; x++){
        row = path[x][0]
        col = path[x][1]
        layout[row][col] = 4
        
    
        row = path[x+1][0]
        col = path[x+1][1]
        layout[row][col] = 3
        await sleep(100)
        
        renderGrid()
    }

}

function clearPath(previousPath){
    for(x = 0; x < previousPath.length-1; x++){
        row = previousPath[x][0]
        col = previousPath[x][1]
        layout[row][col] = 0
    }
    layout[1][17] = 3;
    renderGrid();
}
const letterMap = {
    English: "E",
    Maths: "M",
    Computing: "C",
    Science: "S",
    History: "H",
    Art: "A",
    Physics: "P"
};
let previousPath = null;
document.getElementById("path-form").addEventListener("submit", async function(e) {
    e.preventDefault();
    if (previousPath != null) {
        clearPath(previousPath);
    }
    const selected = document.getElementById("subject-select").value;
    const target = letterMap[selected];
    const result = BFS(layout, target);
    if (result.found) await showPath(result.path);
    previousPath = result.path;
});




