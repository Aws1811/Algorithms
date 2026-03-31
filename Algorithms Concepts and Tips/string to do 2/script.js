// 1. Reverse String

function reverseString(str) {
    var result = [];
    str=str.split("");
    for(var i =0;i<str.length;i++){        
        result.unshift(str[i]);
    }
    let resultstr;
    resultstr=result.join("");
    console.log(resultstr);
}
console.log(reverseString("creature"));

//2. Remove Even length strings

    function removeEvenLengthStrings(arr){
        let result =[];
        for(var i = 0;i<arr.length;i++){
            if((arr[i].length) %2 !==  0 ){
                result.push(arr[i]);
            }
        }return result;
    }
    let arr = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."];
    let result = removeEvenLengthStrings(arr);
    console.log(result); 

//3. Integer to Roman Numerals

function intToRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = "";
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }
    return result;
}
console.log(intToRoman(349));

//4. Ruman To Integer Numerals

function romanToInteger(num){
    const values ={
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;
    for(var i = 0;i<num.length;i++){
        const current = values[num[i]];
        const next = values[num[i+1]];
        if(next>current){
            result-=current;
        }else {
            result+=current;
        }
    }return result
    
}

console.log(romanToInteger("III"));    // 3
console.log(romanToInteger("DCIX"));   // 609
console.log(romanToInteger("MXDII"));  // 1492
