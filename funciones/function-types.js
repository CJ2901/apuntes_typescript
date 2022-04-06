"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `5 de asada Spider-Man!`;
    //* let myFunction: () => number;
    //* let myFunction: Function;
    let myFunction;
    //! myFunction = 10;
    //! console.log(myFunction);
    //! myFunction = addNumbers;
    //! console.log(myFunction(1,2));
    myFunction = greet;
    console.log(myFunction('Alexander'));
    // myFunction = saveTheWorld;
    // console.log(myFunction());
})();
