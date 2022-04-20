( () => {

    interface Client {
        name: string;
        age: number;
        address: Address;
        getFullAddress( id: string ): string;
    }
    
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Alexander',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Otawa'
        },
        getFullAddress( id: string ){
            return this.address?.city;
        }
    }
    
    const cliente2: Client = {
        name: 'Mónica',
        age: 25,
        address: {
            id: 132,
            zip: 'KY2 SUA',
            city: 'Otawe'
        },
        getFullAddress( id: string ){
            return this.address?.city;
        }
    }

    // console.log(client,cliente2);

}) ()