/*global Accordion*/
(function($, global){
    "use strict";
    var acd01 = bellows();
    var acd02 = bellows({
        root        : ".js-bellows2",
        interlocking: true,
        startCurrent: 0,
        duration    : 600,
        onOpen      : function(instance){
            console.log(instance);
        }
    });

})(jQuery, (this || 0).self || global);
