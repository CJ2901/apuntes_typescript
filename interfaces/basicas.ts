( () => {

    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let flash: Hero = {
        name : 'Barry Allen',
        age  : 24,
        powers : [1,2]
    }

    let batman: Hero = {
        name : 'Bruce Wayne',
        age : 30,
        powers : [1],
        getName(){
            return this.name;
        }

    }

} ) ()