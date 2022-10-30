//Assign all the elements being used
const snakeGameBoard = document.querySelector("#gameboard")
const scoreBoard = document.querySelector("#score")
//const startGame = document.querySelector('.start-game')

let snakePosition = [{x:5, y:6}] //sanke array
let inputDirection = {x:0, y:0}
let speed = 10;
let score = 0;
let lastPaintTime = 0;
let foodBait = {x: 10, y:10};


//setup game function, the main function
function main(startGame){ //(ctime)
    window.requestAnimationFrame(main);
    //console.log(startGame) //to see the time of the game
    if((startGame - lastPaintTime)/ 1000 < 1/speed){
        return;
    }
    lastPaintTime = startGame;
    gamePlay()
}

//create function in case the sanke collides of bumps into walls

function didSnakeCollide(snake){
    //if the snake runs into inself
    for(let i = 1; i < snakePosition.length; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    //when snake bumps into wall

    if(snake[0].x >= 25 || snake[0].x <=0 || snake[0].y >= 25 || snake[0].y <= 0){
        return true;
    }
    return false;
}
}

function gamePlay(){ //gameEngine()
    //add functions to update the snake array when it eats the food
    if(didSnakeCollide(snakePosition)){
        inputDirection = {x: 0, y: 0};
        alert("GAME OVER!!");
        snakePosition = [{x:5, y:6}];
        score = 0;
    }

    //add a if statemtn for when the snake eats the food to update the score 
    //and update thr snake length
    if(snakePosition[0].y === foodBait.y && snakePosition[0].x === foodBait.x){
        score += 1;
    
    scoreBoard.innerHTML = " " + score;
    snakePosition.unshift({x:snakePosition[0].x + inputDirection.x, y: snakePosition[0].y + inputDirection.y });
    //add mathround to add the food on a random position
    let a = 2;
    let b = 23;
    foodBait = {x: Math.round(a +(b-a)* Math.random()), y: Math.round(a +(b-a)* Math.random())}
    }

    //for loop for moving the snake
    for(let i = snakePosition.length - 2; i >= 0; i--){
        snakePosition[i+1] = {... snakePosition[i]};
    }

    snakePosition[0].x += inputDirection.x;
    snakePosition[0].y += inputDirection.y;

    //now time to display the snake and food on the gameboard
    snakeGameBoard.innerHTML = '';
    snakePosition.forEach((e, index) =>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y; 
        snakeElement.style.gridColumnStart = e.x;
        
        if(index === 0){
            snakeElement.classList.add('snake-head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        snakeGameBoard.appendChild(snakeElement);
    });

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = foodBait.y;
    foodElement.style.gridColumnStart = foodBait.x;
    foodElement.classList.add('rodent')
    snakeGameBoard.appendChild(foodElement)

}

window.requestAnimationFrame(main);
window.addEventListener('keydown', function(e){
    inputDirection = {x:0, y:1}
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDirection.x = 0;
            inputDirection.y = -1;
            break;
        
        case "ArrowDown":
            console.log("ArrowDown");
            inputDirection.x = 0;
            inputDirection.y = 1;
            break;
        
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDirection.x = -1;
            inputDirection.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDirection.x = 1;
            inputDirection.y = 0;
            break;
            default:
                break;
    }
});


/*
//Make the snake grow, and add on to the score
function snakeMovements(x, y){
    const element = addImage('img/snakehead.png')
    element.style.zIndex = 1
    move(element).withArrowKeys(x,y)

    return {
        element : element
    }
}

//add new image of the snake and rodent function
function addImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute';
    image.style.height = (image.offsetHeight + 26) + 'px'
    document.body.append(image)
    return image
}

//Create the snake
//Snake will be an array
//function snake(){}
//Create the area were the snake will be moving

//Give a command as to what happend when the snake eats something
function randomBait(){
    
}
//Create a win scenario

//Create a if statement for when the user ends or loses the game
//Without using console.log

//set a time limit

//set the score or how many rodents left to eat


//use arrow keys
//Add controls, eventlistners to the snake to have it more up, down, left, right
//Snake movement = success
function move(element){
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'

    }
    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveSnake(){
            if (direction === 'west'){
                x-=1
        }
            if (direction === 'north'){
                y+=1
        }
            if (direction === 'east'){
                x+=1
        }
            if (direction === 'south'){
                y-=1
        }

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        }

    setInterval(moveSnake, 1)
    document.addEventListener('keydown', function(e){
        if(e.repeat)return;

        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
        callback(direction)
    })

    document.addEventListener('keyup', function(e){
            direction = null;
            callback(direction)
        })
    }
    return{
        to: moveToCoordinates, 
        withArrowKeys: moveWithArrowKeys,
    }
}
*/