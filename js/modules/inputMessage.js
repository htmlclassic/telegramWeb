;

let inputBlock = document.querySelector('.dialog .input-block');
let inputBlockDefaultHeight = window.getComputedStyle(inputBlock).height;
let message = document.querySelector('.dialog .input-message');

let heightToAdd = 18;
let MAXROWS = 12;

message.addEventListener('input', function(e) {
    adjustInputBlock(e);
});

function adjustInputBlock(e) {
    if (e.inputType === "deleteContentBackward") {
        changeInputBlock(0, 1);
    }

    while(checkOverflow(message) && +message.getAttribute("rows") <= MAXROWS) {
        changeInputBlock(heightToAdd, +message.getAttribute("rows") + 1);
    }
}

function changeInputBlock(heightToAdd, rows) {
    if (rows >= 1) {
        let inputBlockHeight = parseFloat(window.getComputedStyle(inputBlock).height);

        message.setAttribute("rows", rows + "");

        if (heightToAdd === 0) {
            inputBlock.style.height = inputBlockDefaultHeight;
        } else {
            inputBlock.style.height = inputBlockHeight + (heightToAdd) + "px";
        }
    }
}

function checkOverflow(el) {
    return el.clientHeight < el.scrollHeight;
}