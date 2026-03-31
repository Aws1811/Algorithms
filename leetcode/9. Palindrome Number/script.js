// /**
//  @param {number} x
//  @return {boolean}
//  
var isPalindrome = function(x) {
    var y = x;
    var num =0;
    var arr = [];
    var no = x%10;
var output = true;
if(y===0){
    return output;
    }else if(x<0||no===0){
    output = false;
        return output;
    }else if(x===0){
        arr.push(0);
        }else{
        while(x>0){
            arr.push(x%10);
            x = Math.floor(x/10);
        }
    }
    for(var i = 0;i<arr.length;i++){
        num = num*10+arr[i];
    }if(num===y){
        return output;
    }else{
        output =false;
        return output;
    }
};console.log(isPalindrome(555));
//another way
var isPalindrome = function(x) {
    var y = 0;
    var s = x;
    if(x<0){
        return false;
    }
    if(x<10){
        return true;
    }
    while(x>0){
        y = y*10+x%10;
        x =Math.floor(x / 10);
    }if(y===s){
return true;
        }else{
            return false;
        }
    
};console.log(isPalindrome(131));