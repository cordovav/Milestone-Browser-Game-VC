//Assign all the elements being used
const snakeGameBoard = document.querySelector(".gameboard")
//one second interval
const snakePosition = 
const snakeVelocity = ;


randomBait = document.querySelector('.rodent')

function startGame(){

}
//Make the snake grow, and add on to the score
function snakeMovements(x, y){
    
}
//Create the snake
function snake(){

}




//Create the area were the snake will be moving

//Add controls, eventlistners to the snake to have it more up, down, left, right
//use arrow keys
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
            if (direction === 'west'){
                y+=1
        }
            if (direction === 'west'){
                x+=1
        }
            if (direction === 'west'){
                y-=1
        }

        element.syle.left = x + 'px'
        element.syle.bottom = y + 'px'
        }

    setInterval(moveSnake,1)
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
//Give a command as to what happend when the snake eats something

//Create a win scenario

//Create a if statement for when the user ends or loses the game
//Without using console.log

//set a time limit

//set the score or how many rodents left to eat




