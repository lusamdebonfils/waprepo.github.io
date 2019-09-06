function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

function myarr(){
    return [1,1];
 }
 console.log("Expected output of myarr() is 40  " + myFunctionTest([1,1], function () {
     return myarr();
 }));

function max(x,y){
    return x>=y?x:y;
}

function maxOfThree(x,y,z){
    let greaterOfTwo = x>=y?x:y;
    return greaterOfTwo>=z?greaterOfTwo:z;
}

function isVowel(testChar){
    let vowels = AEIOU;
    let testingforCaps = vowels.toLowerCase();
    return ((vowels.indexOf(testChar) > -1) ||  (testingforCaps.indexOf(testChar)>-1));
}

function sum(inputArray){
    let total = 0;
    for(let i = 0; i < inputArray.length; i++){
        total = total + inputArray[i];
    }
    return total;
}

function multiply(inputArray){
    let total = 1;
    for(let i = 0; i < inputArray.length; i++){
        total = total * inputArray[i];
    }
    return total;
}

function reverse(word){
    let len = word.length;
    if(len === 1 || len === 0) return word;
    let result = null;
    for(let i = len-1; i >=0; i++){
        result = result + word[i];
    }
    return result;
}

function findLongestWord(testArray){
    let len = testArray.length;
    let max = testArray[0];
    for(let i = 1; i < len; i++){
        if(testArray[i].length>max.length){
            max = testArray[i];
        }
    }
    return max;
}