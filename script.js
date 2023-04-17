
//Selectors 
const grid =document.querySelector(".grid");
const grid_size = document.querySelector(".size-value");
const size_slider = document.querySelector("#sizeSlider");
const size_display = document.querySelector("#sizeValue");

//Modes 
let currentMode = 'color';
let currentSize = 16;



//Size 
size_slider.addEventListener("input", function() {
  currentSize = size_slider.value;
  makeGrid(currentSize);
  size_display.innerHTML = `${currentSize} x ${currentSize}`;
});

//Function that Changes the Color To Black 
function changeColor(e) { 
    e.target.style.backgroundColor = 'black';
};


//Function that Makes Grid and Allows Hover 
function makeGrid(size) {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('square');
    gridElement.addEventListener('mouseover', changeColor);
    grid.appendChild(gridElement);
  }
}
makeGrid(currentSize);
