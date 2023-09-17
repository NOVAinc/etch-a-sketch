// Grab container
let gridContainer = document.getElementById("gridContainer");

let gridSize = 16;

let gridAreas = [];

function createGrid (gridSize) {
    for (let i = 0, j = gridSize**2; i < j ; i++) {
        let gridArea = document.createElement("div");
        gridArea.innerText = `${i}`;
        gridArea.classList.add("area");
        gridAreas.push(gridArea);
        gridContainer.appendChild(gridArea);
        gridArea.addEventListener("mouseover", () => {
            gridArea.style.backgroundColor = "#888888";
        });
    }
}

createGrid(gridSize);

