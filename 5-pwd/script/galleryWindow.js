"use strict";
var HEDE = HEDE || {};

HEDE.GalleryWindow = function () {
    HEDE.Window.call(this, "Bildgalleri", "test.png", 200, 200);
};

HEDE.GalleryWindow.prototype = Object.create(HEDE.Window.prototype);