
(() => {

    //Tipos
    const batman = 'Bruce';
    const superman = 'Clark';

    const existe = false;

    // Tuplas
    const parejaHeroes: [ string , string ] = [ batman , superman ];
    const villano: [ string, number, boolean] = ['Lex Luthor' , 5 , true ];

    // Arreglos
    const aliados: string[] = ['Wonder Woman', 'Aquaman', 'San', 'Flash'];

    // Enumeraciones
    enum fuerza{
        aquaman = 0,
        batman = 1,
        flash = 5,
        superman = 100
    }

    const fuerzaFlash: fuerza = fuerza.flash;
    const fuerzaSuperman: fuerza = fuerza.superman;
    const fuerzaBatman: fuerza = fuerza.batman;
    const fuerzaAcuaman: fuerza = fuerza.aquaman;

    // Retorno de funciones
    function activar_batiseñal(): string {
        return 'activada';
    }

    function pedir_ayuda(): void {
        console.log('Ayuda!!!');
    }

    // Aserciones de Tipo
    const poder: any = 100;
    const largoDelPoder:number = ( poder as string ).length;
    console.log( largoDelPoder );


})()