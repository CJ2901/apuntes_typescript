(() => {

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'Batiseñal activada. Los malos teman';
    }

    console.log( typeof activateBatisignal );

    const heroName = returnName();

})()