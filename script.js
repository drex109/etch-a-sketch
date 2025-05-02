const grid = document.querySelector('#grid');
const size = document.querySelector('#size');

function createCanvas(canvasSize) {
    for (let i = 0; i < canvasSize; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = 'black';
        });
        grid.appendChild(square);
    }
}

createCanvas(256);

size.addEventListener('click', (e) => {
    
    let choice = parseInt(prompt('Please enter a number that does not exceed 100'));
    if (choice > 0 && choice <= 100) {
        grid.innerHTML = ''
        canvas = choice * choice;
        grid.style.width = `${4.5 * choice}em`;

        createCanvas(canvas);

    } else {
        alert('Invalid input')
    }
});

