// print numbers 1 to 10
function num(){
    for (var i=1;i<=10;i++){
        console.log(i);
    }
}
num();

// reverse counting
function num1(){
    for(var i=10;i>=1;i--){
        console.log(i);
    }
}
num1();

// even numbers 
function num2(){
    for(var i=0;i<=20;i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
num2();
//  odd numbers 
function num3(){
    for(var i=0;i<=20;i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}
num3();
// sum of the numbers 

var sum=0;
function num4(){
    for(var i=0;i<=10;i++){
        sum += i;
    }
    console.log(sum);
}
num4();

//  fizz buzz

function fizzbuzz(){
    for(var i=1;i<=30;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzbuzz();