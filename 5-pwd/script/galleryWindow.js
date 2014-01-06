"use strict";
var HEDE = HEDE || {};

HEDE.GalleryWindow = function () {
    HEDE.Window.call(this, "Bildgalleri", "pics/7.png", 400, 400);
};

HEDE.GalleryWindow.prototype = Object.create(HEDE.Window.prototype);