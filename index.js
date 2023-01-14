
//create variable for dodger element
const dodger = document.getElementById('dodger');
//change color
dodger.style.backgroundColor = '#FF69B4';
//move UP
dodger.style.bottom = '0px';


//add event listener/move conditions
//LEFT MOVEMENT
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
});
//RIGHT MOVEMENT
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});


function moveDodgerLeft() {
    //prepare the number to be worked with (remove pixels qualifier and make it an int)
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    //conditionally "move" to the left (decrease margin)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }  
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace('px', '');
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}