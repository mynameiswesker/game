var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

//Объявляем переменный картинок как выполнение ф-ии Image();
var bird = new Image();
var background = new Image();
var font = new Image();
var colomnUp = new Image();
var colomnBott = new Image();

//Загружаем картинки
bird.src = 'pictures/bird.png';
background.src = 'pictures/background.png';
font.src = 'pictures/font.png';
colomnUp.src = 'pictures/colomnUp.png';
colomnBott.src = 'pictures/colomnBott.png';

//Переменные для colomnUp
var gap = 90;

//Переменные для bird
var xPos = 10;
var yPos = 150;

//Гравитация
var gravity = 1.6;

//Счет
var score =0;

//Ф-ия для отрисовки картинок
function draw() {
    context.drawImage(background,0,0);

    for(var i=0; i<block.length;i++){
        context.drawImage(colomnUp, block[i].x, block[i].y);
        context.drawImage(colomnBott, block[i].x,block[i].y + colomnUp.height +gap);
        block[i].x--;

        if(block[i].x ==115){
            block.push({
                x: canvas.width,
                y: Math.floor(Math.random()*colomnUp.height) - colomnUp.height
            });
        }

        // Отслеживание прикосновений
        if(xPos + bird.width >= block[i].x
            && xPos <= block[i].x + colomnUp.width
            && (yPos <= block[i].y + colomnUp.height
                || yPos + bird.height >= block[i].y + colomnUp.height + gap) || yPos + bird.height >= canvas.height - font.height) {
            location.reload(); // Перезагрузка страницы
        }

        //Счет:
        if(block[i].x == 5){
            score++;
        }

    }

    context.drawImage(font,0,background.height -font.height);
    context.drawImage(bird,xPos,yPos);

    yPos += gravity;

    //Счет
    context.fillStyle ="#000";
    context.font ="24px Verdana";
    context.fillText('Счёт: '+score,10, canvas.height-20);

    requestAnimationFrame(draw);
}

colomnBott.onload = draw;

document.addEventListener('click',moveUp);

//При нажатии на мышь - поднимать bird
function moveUp() {
    yPos-=35;
}

/** Создание блоков **/

var block = [];

block[0] = {
    x:canvas.width,//Координаты по x 288
    y:0 //Координаты по y 512
};



