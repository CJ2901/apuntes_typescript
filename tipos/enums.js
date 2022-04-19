"use strict";
(() => {
    let ListaNueva;
    (function (ListaNueva) {
        ListaNueva[ListaNueva["min"] = 1] = "min";
        ListaNueva[ListaNueva["medium"] = 2] = "medium";
        ListaNueva[ListaNueva["max"] = 10] = "max";
    })(ListaNueva || (ListaNueva = {}));
    let currentAudio = ListaNueva.max;
    console.log(currentAudio);
    console.log(ListaNueva);
})();
//# sourceMappingURL=enums.js.map