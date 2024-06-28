let buttonArea = document.querySelector('.buttonArea');

const buttonValues = ['()', '%', 'X', '+/-', '1', '4', '7', 'Back', '2', '5', '8', '0', '3', '6', '9', 'Clear', '+', '-', '/', '='];

function createButtons(){
for(i = 0; i < 20; i++){
    let button = document.createElement('button');
    button.classList.add(`button`, `${buttonValues[i]}`);
    button.textContent = buttonValues[i];
    buttonArea.appendChild(button);
}
}

createButtons();
