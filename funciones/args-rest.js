"use strict";
(() => {
    const fullName = (firstName, ...argsRestantes) => {
        return `${firstName} ${argsRestantes.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
