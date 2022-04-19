( () => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L Fokin Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany el visión blanco',
        activo: true,
        poder: 1982
    }

//    const printAvenger = (avengers:Avengers)  => {
//        console.log(avengers.vision.toUpperCase());
//    }

   const printAvenger = ( {poder, ...resto} : Avengers)  => {
        console.log(poder.toFixed(0) ,"and" ,resto.nick.toUpperCase());
    }

//    printAvenger(avengers);
    // const avengersArr: string[] = ['Cap América','Iron Man','Thor'];
    const avengersArr: [string,number,boolean] = ['Cap América',1982,false];
    const [,,tercero] = avengersArr;
    console.log({tercero});


}) ()