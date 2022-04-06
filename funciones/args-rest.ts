(() => {

    const fullName = ( firstName:string , ...argsRestantes: string[] ) : string => {
        return `${firstName} ${argsRestantes.join(' ')}`;
    }

    const superman = fullName('Clark','Joseph','Kent');
    console.log({superman});

})()