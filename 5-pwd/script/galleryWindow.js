"use strict";
var temp = temp || {};


temp.GalleryWindow = function () {
    temp.Window.call(this, "testtitel", "test.png", 50, 50);
};

temp.GalleryWindow.prototype = Object.create(temp.Window.prototype);