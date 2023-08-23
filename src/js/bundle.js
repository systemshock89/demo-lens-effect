import '/src/js/modules/rain.js' // rain canvas

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('mousemove', e => {

        // добавим к тегу html css переменные
        // с позицией курсора, причем когда курсор расположен по центру -
        // картинка должна быть ровной (для этого вычитаем window.innerWidth / 2)
        // также замедляем вращение - умножаем на .01
        // чтобы при перемещении в нижний левый угол верхний правый угол не увеличивался, а уменьшался, умножим на -.01 (инвертируем наклон)
        Object.assign(document.documentElement, {
            style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg; 
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;          
            `
        })
    });

});