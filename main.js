

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

function max(x,y){
    return x>=y?x:y;
}

function maxOfThree(x,y,z){
    let greaterOfTwo = x>=y?x:y;
    return greaterOfTwo>=z?greaterOfTwo:z;
}

function isVowel(testChar){
    let vowels = 'AEIOU';
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
    for(let i = len-1; i>=0; i--){
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

function filterLongWords(testArray,testLength){
    let result = testArray.filter(function(elem){
        return elem.length > testLength;});
    return result;
}
     function multipliedBy10(a){
        const result =  a.map(function(elem) {
            return elem * 10;
          });
          return result;
     }
     function equalToThree(a){
        const result =  a.filter(function(elem) {
            return elem == 3;
          });
          return result;
     }

     function productOfArray(a){
        var total = 1;
        const result =  a.reduce(function(total,ele) {
            return total = total * ele;
          });
          return result;
     }


function myTestResults(){
    console.log("Expected output of max() is 9  " + myFunctionTest(9, function () {
        return max(2,9);
    }));
    console.log("Expected output of maxOfThree() is 9  " + myFunctionTest(9, function () {
        return maxOfThree(2,9,8);
    }));
    console.log("Expected output of isVowel() is true  " + myFunctionTest(true, function () {
        return isVowel('a');
    }));
    console.log("Expected output of sum() is 18  " + myFunctionTest(18, function () {
        return sum([4,5,9]);
    }));
    console.log("Expected output of multiply() is 18  " + myFunctionTest(18, function () {
        return multiply([2,9]);
    }));
    console.log("Expected output of reverse() is yob  " + myFunctionTest('yodb', function () {
        return reverse('boy');
    }));
    console.log("Expected output of findLongestWord() is jakaata  " + myFunctionTest('jakaata', function () {
        return findLongestWord(['boy','King','jakaata','kiki']);
    }));
    
    console.log("Expected output of filterLongWords() is jakaata  " + myFunctionTest(['jakaata'], function () {
        return filterLongWords(['boy','King','jakaata','kiki'],5);
    }));

    console.log("Expected output of multipliedBy10() is 10,20,30  " + myFunctionTest([10,20,30], function () {
        return multipliedBy10([1,2,3]);
    }));

    console.log("Expected output of equalToThree() is 3,3.0  " + myFunctionTest([3,3.0], function () {
        return equalToThree([1,2,3,9,3.0]);
    }));

    console.log("Expected output of productOfArray() is 6 " + myFunctionTest(6, function () {
        return productOfArray([1,2,3]);
    }));
    
    
}

myTestResults();

