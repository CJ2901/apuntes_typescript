(() => {

//! Funciones básicas
function sumar ( a:number , b:number ) : number {
    return a + b ;
} 

const contar = ( heroes:string[] ): number => {
    return heroes.length;
}


const superHeroes: string[] = ['Flash','Superman','Batman','Wonder Woman','Shazam'];
contar(superHeroes);

//! Parámetros con argumentos por defecto
const llamarBatman = ( llamar:boolean = true ) : void => {
    if(llamar){
        console.log("Batiseñal activada!");
    }
}

llamarBatman();

//! Rest?
const unirHeroes = ( ...personas:string[] ) : string =>{
    return personas.join("- ");
}

console.log(unirHeroes('Hola','Soy','El','Bromas'));

//! Tipo función
const noHaceNada = ( numero : number , texto : string , booleano : boolean , arreglo : string[] ) => {} 

//! Crear el tipo de función que acepte la función "noHaceNada"
let noHaceNadaTampoco: (n : number , s : string , b : boolean , a : string[]) => void;
 

})()