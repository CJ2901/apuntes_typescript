( () => {

    type Avenger = {
        name : string,
        weapon : string,
    }

    
    const iron: Avenger = {
        name : 'Iron Man',
        weapon : 'Mark 52'
    }
    const cap: Avenger = {
        name : 'Capitán América',
        weapon : 'Escudo Vibranium'
    }
    const thor: Avenger = {
        name : 'Thor',
        weapon : 'Mjolnir'
    }

    const avengers : Avenger[] = [iron,cap,thor];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
        
    }

}) ()