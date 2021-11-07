const matrix = [];
let stepCount = 0;
let cols = 3;
let rows = 3;
let mark = 'X';


const initState = () => {
	
    
}


const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    matrix[row][cell] = element.textContent;
}


const deleteSigns = () => {
    let allCell = document.querySelectorAll('.cell');
    allCell.forEach(cell => {
        cell.innerText = ' ';
    })
 }
deleteSigns()

 const increaseCounter = () => {
    board.addEventListener('click', function () {
        stepCount = stepCount + 1;
    })
}

increaseCounter()