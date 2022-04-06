( () => {

    type Hero ={
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }    

    let myCustomVariable: ( string | number | Hero ) = 'Alexander';
    console.log( typeof myCustomVariable );

    myCustomVariable = 20;
    console.log( typeof myCustomVariable );

    myCustomVariable = {
        name: 'Clark',
        age: 50,
        powers: [1,2]
    }
    console.log( typeof myCustomVariable );
    console.log( myCustomVariable );

} )()