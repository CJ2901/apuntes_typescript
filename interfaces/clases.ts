( () => {

    interface Xmen { 
        name: string;
        realName: string;
        mutantPower( id:number ):string ;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen , Human {

        constructor(
            public age: number,
            public name: string,
            public realName: string
        ){}

        mutantPower(id: number) {
            return this.name + ' es ' + this.realName ;
        }
    }

    const wolverine = new Mutant(200,'Wolverine','James Howlatt');
    console.log(wolverine.mutantPower(200));

}) ()