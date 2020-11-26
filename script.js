'use strict';

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function startGame (){
    const number = Math.floor(Math.random() * 100) + 1;
    let atm = 10;

    function enterUserNumber(){
        const userNumber = prompt('Угадай число от 1 до 100');

        function checkAttemptsNumber(){
            let check1 = confirm('Попытки закончились. Хотите сыграть еще?');
            if (check1){
                atm = 10;
                startGame();
            } else {
                alert('Игра окончена.');
                return;
            }
        } 

        if(userNumber === null){
            alert('Игра окончена.');
            return;
        }

        switch(true){
            case(+userNumber > number): 
                --atm;
                if (atm === 0){
                    checkAttemptsNumber();
                } else {
                    alert('Загаданное число меньше, осталось попыток:' + atm);
                    enterUserNumber();
                }                
                break;

            case(+userNumber < number):
                --atm;
                if (atm === 0){
                    checkAttemptsNumber();
                } else {
                    alert('Загаданное число больше, осталось попыток:' + atm);
                    enterUserNumber();
                }
                break;

            case(+userNumber === number):
                let check2 = confirm('Поздравляю, Вы угадали!Хотите сыграть еще?');
                if(check2){
                    atm = 10;
                    startGame();
                } else {
                return;
                }
                break;
        }
        if(!isNumber(userNumber)){
            alert('Введи число');
            enterUserNumber();
        }
    }
        enterUserNumber();
}
startGame();