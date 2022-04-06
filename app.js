"use strict";
(() => {
    //! Funciones básicas
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ['Flash', 'Superman', 'Batman', 'Wonder Woman', 'Shazam'];
    contar(superHeroes);
    //! Parámetros con argumentos por defecto
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada!");
        }
    };
    llamarBatman();
    //! Rest?
    const unirHeroes = (...personas) => {
        return personas.join("- ");
    };
    console.log(unirHeroes('Hola', 'Soy', 'El', 'Bromas'));
    //! Tipo función
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    //! Crear el tipo de función que acepte la función "noHaceNada"
    let noHaceNadaTampoco;
})();
