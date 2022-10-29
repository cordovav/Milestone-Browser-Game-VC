//Assign all the elements being used
const snakeGameBoard = document.querySelector(".gameboard")
const startGame = document.querySelector('.start-game')
//one second interval
//const snakeVelocity = ;
const snakePosition = snakeMovements(250, 200)


randomBait = document.querySelector('.rodent')

//function startGame(){}
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
