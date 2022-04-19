"use strict";
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ['Flash', 'Superman', 'Batman', 'Wonder Woman', 'Shazam'];
    contar(superHeroes);
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada!");
        }
    };
    llamarBatman();
    const unirHeroes = (...personas) => {
        return personas.join("- ");
    };
    console.log(unirHeroes('Hola', 'Soy', 'El', 'Bromas'));
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
})();
//# sourceMappingURL=app.js.map