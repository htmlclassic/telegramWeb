'use strict';

import "./modules/chatSelection.js";
import "./modules/contextMenu.js";
import "./modules/resize.js";
import "./modules/inputMessage.js";

import {adjustTextOverflow} from "./modules/chatSelection.js";

window.addEventListener('load', function() {
    adjustTextOverflow();
});