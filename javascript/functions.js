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



