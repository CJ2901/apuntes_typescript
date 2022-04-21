"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? `Salu2: ${text}` : `${text} no es permitido`;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Alexander'));
//# sourceMappingURL=main.js.map