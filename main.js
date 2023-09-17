let areaGrid = [];

for (let i = 0; i < 16; i++) {
    areaGrid.push(document.createElement("div"));
}

areaGrid.forEach(grid => grid.classList.add("area"));

console.log(areaGrid);