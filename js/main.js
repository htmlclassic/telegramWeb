window.onload = function() {
    let list = document.querySelectorAll('.chats');
    let listItems = document.querySelectorAll('.chats li');

    for (let item of listItems) {
        item.onclick = function() {
            // ТУТ ТУПО ВСЕ ОДИНАКОВО, НАД ЗАПАКОВАТЬ КАКТО В ФУНКЦИЮ
            const sentClass = "sent";
            const sentReceivedClass = "sent-received";

            clearPreviousSelected(sentClass, sentReceivedClass);

            item.classList.toggle("selected");

            let pinnedChat = item.querySelector(".pinned-chat");
            let messageStatus = item.querySelector('.message-status');

            let classListMessageStatus = messageStatus.classList.toString();
            let classListPinnedChat = pinnedChat.classList.toString();

            if (classListMessageStatus.indexOf(sentReceivedClass) != -1) {
                messageStatus.classList.remove(sentReceivedClass);
                messageStatus.classList.add(sentReceivedClass + "-alt");
            } else if (classListMessageStatus.indexOf(sentClass) != -1) {
                messageStatus.classList.remove(sentClass);
                messageStatus.classList.add(sentClass + "-alt");
            }

            if (classListPinnedChat.indexOf("pinned-icon") != -1) {
                pinnedChat.classList.remove("pinned-icon");
                pinnedChat.classList.add("pinned-icon-alt");
            }
               
        };
    }

    function clearPreviousSelected(sentClass, sentReceivedClass) {
        let selectedChat = document.querySelector(".chats .selected");

        let messageStatus = selectedChat.querySelector(".message-status");
        let pinnedChat = selectedChat.querySelector(".pinned-chat");
        
        let classListMessageStatus = messageStatus.classList.toString();
        let classListPinnedChat = pinnedChat.classList.toString();
        
        selectedChat.classList.remove("selected");

        if (classListMessageStatus.indexOf(sentReceivedClass + "-alt") != -1) {
            messageStatus.classList.remove(sentReceivedClass + "-alt");
            messageStatus.classList.add(sentReceivedClass);
        } else if (classListMessageStatus.indexOf(sentClass + "-alt") != -1) {
            messageStatus.classList.remove(sentClass + "-alt");
            messageStatus.classList.add(sentClass);
        }

        if (classListPinnedChat.indexOf("pinned-icon-alt") != -1) {
            pinnedChat.classList.remove("pinned-icon-alt");
            pinnedChat.classList.add("pinned-icon");
        }
    }
};