( () => {

    const fullName = ( firstName:string, lastName?:string , upper: boolean = false ): string => {

        if ( upper ){
            return `${firstName} ${lastName || 'El Poderoso'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || 'El Poderoso'}`
        }
    }

    const name = fullName( 'Peter' );

    console.log({name});

}) ()