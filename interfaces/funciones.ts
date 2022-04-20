( () => {

    interface addTwoNumbers {
        ( a:number, b: number ):number;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = ( a:number , b:number ) => {
        return 10;
    }

    console.log(addNumbersFunction(3,2));
}) ()