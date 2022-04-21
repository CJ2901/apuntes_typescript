
    namespace Validations {

        export const validateText = ( text:string ): string => {
            return ( text.length > 3 ) ? `Salu2: ${text}` : `${text} no es permitido`;
        }

        export const validateDate = ( myDate:Date ): boolean => {
            return ( isNaN( myDate.valueOf() ) )
                ? false
                : true;
        }

    }


    console.log( Validations.validateText('Alexander') );

