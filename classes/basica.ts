( () => {

    class Avenger {
        
        static avgAge : number = 22;
        static getAvgAge() {
            return this.length;
        }

        constructor( 
            private name:string,
            private team:string,
            public realName?:string
        ) {}

        public bio(){
            return `${ this.name } pertenece al ${ this.team } `
        }

    }

    const antman: Avenger = new Avenger('Antman','TeamCap','Scott');
    
    // console.log(antman.bio());
    // console.log(Avenger.avgAge);
    // console.log(Avenger.getAvgAge());

}) ()