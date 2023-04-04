const grid =document.querySelector(".grid");
const grid_size = document.querySelector(".size-value");


function changeColor() { 
  console.log("hey");
};



function makeGrid(size) { 
  for (i = 0; i < size; i++) { 
    const gridElement = document.createElement('div');
    gridElement.classList.add('square');
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement);
    }
};

makeGrid(16);
console.log("Script loaded.");
