const grid = document.querySelector('#grid');
const size = document.querySelector('#size');

function randomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function createCanvas(canvasChoice) {
    grid.innerHTML = ''
    const totalCanvas = canvasChoice * canvasChoice;
    const squareSize = 100 / canvasChoice;
    for (let i = 0; i < totalCanvas; i++) {
        let square = document.createElement('div');
        let opa = 10;
        square.style.flexBasis = `${squareSize}%`;
        square.style.aspectRatio = '1 / 1';
        square.style.border = '1px solid black';
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = randomRgb();
            square.style.opacity = `${opa}%`
            opa += 10;
        });
        grid.appendChild(square);
    }
}

createCanvas(16);

size.addEventListener('click', (e) => {
    
    let choice = parseInt(prompt('Please enter a number that does not exceed 100'));
    if (choice > 0 && choice <= 100) {
        createCanvas(choice);
    } else {
        alert('Invalid input')
    }
});

