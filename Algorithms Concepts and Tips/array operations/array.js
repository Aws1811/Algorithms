// accessing elements

var colors = ["red", "blue","green", "yellow","purple"];
console.log(colors[0],colors[4],colors[1]);
colors[2]="orange";
console.log(colors[2]);

//traversing an array

let numbers = [10, 20, 30, 40, 50];
for(var i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
for (var j =numbers.length-1;j>=0;j--){
    console.log(numbers[j]);
}

//searching in an array

let numberrs = [5, 10, 15, 20, 25];
for(var i = 0;i<=numberrs.length-1;i++){
    if(numberrs[i]=25){
        console.log("found at position X");
    }else{
        console.log("not found");
    }
;
}

//sorting an array
let scores = [50, 20, 70, 10, 40];
for(var i=0;i<=scores.length;i++){
    for(var j=0;j<=scores.length;j++){
        let temp =scores[0];
        if(scores[j]>scores[j+1]){
            temp=scores[j];
            scores[j]=scores[j+1];
            scores[j+1]=temp;
        }
    }
}
console.log(scores);

//--------------------------------------------

let scoress = [50, 20, 70, 10, 40];
for(var i=0;i<=scoress.length;i++){
    for(var j = 0 ; j<=scoress.length;j++){
        if(scoress[j+1]>scoress[j]){
            let temp = 0;
            temp = scoress[j+1];
            scoress[j+1]=scoress[j];
            scoress[j]=temp;
        }
    }
}
console.log(scoress);

//---------------------------------------

let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
names.sort();
console.log(names); 

// Inserting Elements

let animals = ["dog", "cat", "rabbit"];
animals.splice(1,0,"tiger");
animals.push("elephant");
animals.unshift("lion");
console.log(animals);

//Deleting Elements

let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1,1);
fruits.shift();
fruits.pop();
console.log(fruits);

//Combining Arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [];
for(var i =0 ; i<=array1.length-1;i++){
    array3.push(array1[i]);
}
for(var i =0 ; i<=array2.length-1;i++){
    array3.push(array2[i]);
}
console.log(array3);

// Splitting an Array

let items = ["a", "b", "c", "d", "e"];
let items1 = [];
let items2 = [];
for(var i =0;i<=items.length-1;i++){
    if(i<3){
        items1.push(items[i]);
    }else{
        items2.push(items[i]);
    }
}
console.log(items1,items2);

//Filtering Elements

let num = [1, 5, 10, 15, 20, 25, 30];
let num1 = [];
for(var i = 0 ; i<=num.length-1;i++){
    if(num[i]>15){
        num1.push(num[i]);
    }
}
console.log(num1);

// Advanced Challenge

let dub =[1, 2, 2 , 2 , 3, 4 , 4, 4, 5 , 5];
let dub1 = [];
for(var i=0;i<=dub.length-1;i++){
    if(dub[i]!=dub[i+1]){
        dub1.push(dub[i]);
    }
}
console.log(dub1);

//--------------------------

let gum = [1,2,3,4,5];
let n = 3;
for (let i = 0; i < n; i++) {
    let last = gum.pop();   
    gum.unshift(last);      
}
console.log(gum);

//----------------------------------

let gum1 = [1,2,3,4,5];
let n1 = 2;
let temp = [];
for (let i = gum1.length - n1; i < gum1.length; i++) {
    temp.push(gum1[i]);
}
for (let i = 0; i < gum1.length - n1; i++) {
    temp.push(gum1[i]);
}
console.log(temp);

