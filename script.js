'use strict';

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function startGame (){
    const number = Math.floor(Math.random() * 100) + 1;

    function enterUserNumber(){
        const userNumber = prompt('Угадай число от 1 до 100');
        
        if(userNumber === null){
            alert('Игра окончена');
            return;
        }

        if(+userNumber === number){
            alert('Поздравляю, Вы угадали!!!');
            return;
        }

        if(+userNumber < number){
            alert('Загаданное число больше');
            enterUserNumber();
        }

        if(+userNumber > number){
            alert('Загаданное число меньше');
            enterUserNumber();
        }

        if(!isNumber(userNumber)){
            alert('Введи число');
            enterUserNumber();
        }
        
    }

    enterUserNumber();
}

startGame();