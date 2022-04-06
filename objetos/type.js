"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let batman = {
        name: 'Bruce Wayne',
        age: 30,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
