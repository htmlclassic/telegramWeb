window.onload = function() {
    let chats = document.querySelectorAll('.chats li');

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
};