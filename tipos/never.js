"use strict";
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Ayuda!');
    console.log('Hola Mundo');
})();
//# sourceMappingURL=never.js.map