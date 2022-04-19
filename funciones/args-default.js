"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'El Poderoso'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'El Poderoso'}`;
        }
    };
    const name = fullName('Peter');
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map