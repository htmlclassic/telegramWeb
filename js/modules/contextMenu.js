;

let chat = document.querySelector('.chats');
let isOpen = false;

// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// }, false);

document.addEventListener('click', function() {
    if (isOpen) {
        hideCustomMenu();
    }
});

chat.addEventListener('contextmenu', function (e) {
    showCustomMenu(e);
}, false);

function showCustomMenu(e) {
    if (isOpen) {
        hideCustomMenu();
    } else {
        let menu = document.querySelector('.context-menu');

        menu.style.display = "block";
        menu.style.left = e.clientX + "px";
        menu.style.top = e.clientY + "px";

        isOpen = true;
    }
}

function hideCustomMenu() {
    let menu = document.querySelector('.context-menu');

    menu.style.display = "none";
    menu.style.left = "0";
    menu.style.top = "0";

    isOpen = false;
}