//*Basic Function: Write a function called welcome that prints "Welcome to coding!" when called.
function welcome(){
    console.log('welcome to coding!')
}
console.log(welcome());

//*With Arguments: Write a function called square that takes a number as input and prints its square. */
var s = 4;
function square (){
    var sq = s + 2;
    return sq;
}
console.log(square());
/*With Return Value: Write a function called convertToCelsiusthat takes a temperature in Fahrenheit and returns the temperature in Celsius.
Formula: C = (F - 32) * 5 / 9 */
var F =12;
function convertToCelsiusthat (){
    var c = (F - 32) * 5 / 9 ;
    console.log(c);
}
console.log(convertToCelsiusthat());

//*Reusable Function: Write a function called isEven that checks if a number is even or odd and returns true or false.
var t = 6
function isEven (){
    if( t%2 == 0){
        console.log('even')
    }else{
        console.log(odd);
    }
}
console.log(isEven());