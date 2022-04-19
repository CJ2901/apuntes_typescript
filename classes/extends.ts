( () => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log('Constructor Avengers llamado');
        }

        protected getFullname() {
            return `${this.name} ${this.realName}`;
        }

    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant : boolean
        ) {
            super( name, realName )
            // console.log('Constructor Xmen llamado');
        }

        get getfullName() {
            return `${this.name} - ${this.realName}`;
        }
        
        set setfullName( name : string ) {

            if (name.length < 3 ) {
                throw new Error("El nombre debe ser mayor de 3 letras");
            }

            this.name = name;
        }

        getFullnameDesdeXmen(){
            // console.log(super.getFullname());
        }
    }

    const wolverine = new Xmen('Wolverine','Logan',true);
    
    wolverine.setfullName = 'El Alexander RAAAAAAA';
    // console.log(wolverine.getfullName);

}) ()