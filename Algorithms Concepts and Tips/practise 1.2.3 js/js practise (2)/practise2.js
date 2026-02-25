//* 1)Write a program that checks if a number is positive or negative.

var x = 2;
if( x >=0){
    console.log('positive');
}else {
    console.log('negative');
}

//* 2)Write a program that prints "Good morning" if the time is less than 12 and "Good afternoon" otherwise.
var time =11;
if ( time <=12){
    console.log('Good morning')
}else{
    console.log('Good afternoon')
}

/** 3)Write a program that assigns grades based on scores: 
90 and above: A
80–89: B
70–79: C
Below 70: F */
var i =86 ; 
if (100>i&&i>=90){
    console.log('A');
}else if(89>=i&&i>=80){
    console.log('B');
}else if(79>=i&&i>=70){
    console.log('C');
}else if(70>i){
    console.log('f');
}

//* 4)Write a program that takes a day of the week and prints whether it’s a weekday or weekend.
var day = 'Friday';
if(day == 'Friday' || day == 'Saterday'){
    console.log('Weekend');
}else {
    console.log('Workday!');
}