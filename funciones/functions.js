"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada. Los malos teman';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
