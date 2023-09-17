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
        gridArea.style.height = `${100/gridSize}%`;
        gridArea.style.width = `${100/gridSize}%`;
        gridContainer.appendChild(gridArea);
        gridArea.addEventListener("mouseover", () => {
            gridArea.style.backgroundColor = "#888888";
        });
    }
}

createGrid(gridSize);

let gridChanger = document.getElementById("gridChanger");

gridChanger.addEventListener("click", () => {
    do {
        gridSize = prompt("Enter a new size");
    } while (Number.isNaN(gridSize));
});