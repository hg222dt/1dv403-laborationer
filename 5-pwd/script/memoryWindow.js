"use strict";
var HEDE = HEDE || {};

HEDE.MemoryWindow = function () {
    HEDE.Window.call(this, "Memory", "pics/imagesIcon.png", HEDE.windowStats.standardHeight , HEDE.windowStats.standardWidth );
};

HEDE.MemoryWindow.prototype = Object.create(HEDE.Window.prototype);


HEDE.MemoryWindow.prototype.startGame = function () {
    
    
    var playGame = new HEDE.Game();
 
};

//Testkommentar