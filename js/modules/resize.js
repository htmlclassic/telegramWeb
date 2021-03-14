;

import {adjustTextOverflow} from "../modules/chatSelection.js"

// elements to resize
let dialogHeader = document.querySelector('.dialog .dialog-header');
let inputBlock = document.querySelector('.dialog .input-block');
let leftCol = document.querySelector('.left-col');
let rightCol = document.querySelector('.right-col');
// end of the elements to resize

let gutter = document.querySelector('.gutter');
let isMouseDown = false;
let screenX = 0;
let diff = 0;

window.addEventListener('resize', function() {
    let w = parseFloat(window.innerWidth) - parseFloat(window.getComputedStyle(leftCol).width);

    dialogHeader.style.width = w + "px";
    inputBlock.style.width = w + "px";
    rightCol.style.width = w + "px";

    adjustTextOverflow();
});

gutter.addEventListener('mousedown', function(e) {
    isMouseDown = true;
    screenX = e.screenX;
    gutter.style.cursor = "e-resize" // not sure it works
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
});

document.addEventListener('mousemove', function(e) {
    if (isMouseDown && screenX !== e.screenX) {
        let leftColWidth = parseFloat(window.getComputedStyle(leftCol).width);
        let rightColWidth = parseFloat(window.getComputedStyle(rightCol).width);
        let dialogHeaderWidth = parseFloat(window.getComputedStyle(dialogHeader).width);
        let inputBlockWidth = parseFloat(window.getComputedStyle(inputBlock).width);

        if (screenX < e.screenX) {
            diff = e.screenX - screenX;

            leftCol.style.width = leftColWidth + diff + "px";
            rightCol.style.width = rightColWidth - diff + "px";

            dialogHeader.style.width = dialogHeaderWidth - diff + "px";
            inputBlock.style.width = inputBlockWidth - diff + "px";
        } else {
            diff = screenX - e.screenX;

            leftCol.style.width = leftColWidth - diff + "px";
            rightCol.style.width = rightColWidth + diff + "px";

            dialogHeader.style.width = dialogHeaderWidth + diff + "px";
            inputBlock.style.width = inputBlockWidth + diff + "px";
        }

        adjustTextOverflow();
        screenX = e.screenX;
    }
});