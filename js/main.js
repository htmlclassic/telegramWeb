function adjustTextOverflow() {
    let pinnedChat = document.querySelector('.chat-block .description .pinned-chat');
    let desc = document.querySelector('.chat-block .description');
    let pinnedChatWidth = parseFloat(window.getComputedStyle(pinnedChat).width);
    let pinnedChatRightMargin = parseFloat(window.getComputedStyle(pinnedChat).right);
    let descWidth = parseFloat(window.getComputedStyle(desc).width);
    let pCollection = document.querySelectorAll('.last-message');
    let chatNameCollectiom = document.querySelectorAll('.chat-name');
    let calcP = descWidth - (pinnedChatWidth + pinnedChatRightMargin + 5);
    
    for (let chatNameItem of chatNameCollectiom) {
        let readAndTimeBlock = chatNameItem.parentNode.querySelector('.read-and-time')
        let readAndTimeBlockWidth = parseFloat(window.getComputedStyle(readAndTimeBlock).width);

        chatNameItem.style.width = descWidth - (readAndTimeBlockWidth + 5) + "px";
    }

    for (let p of pCollection) {
        if (p.parentNode.querySelector(".pinned-icon") !== null || p.parentNode.querySelector(".pinned-icon-alt") !== null) {
            p.style.width = calcP + "px";
        }
    }
}

window.onresize = function() {
    adjustTextOverflow();
};

window.onload = function() {
    let chats = document.querySelectorAll('.chats li');

    adjustTextOverflow();

    for (let chat of chats) {
        chat.onclick = function() {
            let messageStatus = chat.querySelector('.message-status');
            let pinnedChat = chat.querySelector(".pinned-chat");

            clearPreviousSelected();

            chat.classList.toggle("selected");
            
            switchMessageStatus(messageStatus);
            switchPinIcon(pinnedChat);
        };
    } 
};

function clearPreviousSelected() {
    let selectedChat = document.querySelector(".chats .selected");

    if (selectedChat !== null) {
        let messageStatus = selectedChat.querySelector('.message-status');
        let pinnedChat = selectedChat.querySelector(".pinned-chat");
        
        selectedChat.classList.remove("selected");

        switchMessageStatus(messageStatus)
        switchPinIcon(pinnedChat)
    }
}

function switchPinIcon(pinnedChat) {
    let classListPinnedChat = pinnedChat.classList.toString();

    if (classListPinnedChat.indexOf("pinned-icon-alt") != -1) {
        pinnedChat.classList.remove("pinned-icon-alt");
        pinnedChat.classList.add("pinned-icon");
    } else if (classListPinnedChat.indexOf("pinned-icon") != -1) {
        pinnedChat.classList.remove("pinned-icon");
        pinnedChat.classList.add("pinned-icon-alt");
    }
}

function switchMessageStatus(messageStatus) {
    let classListMessageStatus = messageStatus.classList.toString();
    const sentClass = "sent";
    const sentReceivedClass = "sent-received";

    if (classListMessageStatus.indexOf(sentReceivedClass + "-alt") != -1) {
        messageStatus.classList.remove(sentReceivedClass + "-alt");
        messageStatus.classList.add(sentReceivedClass);
    } else if (classListMessageStatus.indexOf(sentClass + "-alt") != -1) {
        messageStatus.classList.remove(sentClass + "-alt");
        messageStatus.classList.add(sentClass);
    } else {
        if (classListMessageStatus.indexOf(sentReceivedClass) != -1) {
            messageStatus.classList.remove(sentReceivedClass);
            messageStatus.classList.add(sentReceivedClass + "-alt");
        } else if (classListMessageStatus.indexOf(sentClass) != -1) {
            messageStatus.classList.remove(sentClass);
            messageStatus.classList.add(sentClass + "-alt");
        }
    }
}