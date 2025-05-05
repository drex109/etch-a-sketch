const grid = document.querySelector('#grid');
const size = document.querySelector('#size');

function createCanvas(canvasChoice) {
    grid.innerHTML = ''
    const totalCanvas = canvasChoice * canvasChoice;
    const squareSize = 100 / canvasChoice;
    for (let i = 0; i < totalCanvas; i++) {
        let square = document.createElement('div');
        square.style.flexBasis = `${squareSize}%`;
        square.style.aspectRatio = '1 / 1';
        square.style.border = '1px solid black';
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = 'black';
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

