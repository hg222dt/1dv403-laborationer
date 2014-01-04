"use strict";
var temp = temp || {};

//Konstruktor?
temp.GalleryWindow = function () {
    temp.Window.call(this, "testtitel", "test.png", 50, 50);
};

//Ärver windows egenskaper
temp.GalleryWindow.prototype = Object.create(temp.Window.prototype);