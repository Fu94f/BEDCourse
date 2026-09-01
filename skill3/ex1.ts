// ENUMS 
//Color picker


enum Color{
    Red,
    Green,
    Blue
}

const showColor= (color: Color) =>{
    if(color === Color.Red){
        console.log("You chose red!")
    }
    else if(color === Color.Green){
        console.log("You chose green!")
    }
    else if (color === Color.Blue){
        console.log("You chose blue!")
    }
}

showColor(Color.Red);
showColor(Color.Blue);
showColor(Color.Green);