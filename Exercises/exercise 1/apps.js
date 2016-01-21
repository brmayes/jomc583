//Pt. One
var tempInput = prompt("What degree is it?");

function farToCel (farTemp) {
  celTemp = Math.floor((farTemp - 32) * (5/9));
  console.log(celTemp);

  if (celTemp <= 10) {
    console.log("The current temperature is " + celTemp + " degrees Celcius. It's cold outside.");
  } else if (celTemp > 10 && celTemp <= 25) {
    console.log("The current temperature is " + celTemp + " degrees Celcius. It's fair outside.");
  } else if (celTemp > 25) {
    console.log("The current temperature is " + celTemp + " degrees Celcius. It's hot outside.");
  }
}

farToCel(tempInput);





//Pt. Two
var addNumbers = [123, 4, 23, 1, 10];


function sumNums(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

var total = sumNums(addNumbers);
console.log("The sum of the number is " + total);





//Pt. Three
var numbers = [2, 123, 4, 23, 167, 1, 10];


function greatestNumber(arr) {
  var largest = 0;
  //if all values are positive

  for (var j in arr) {
    var currentNum = arr[j];
    if (currentNum > largest) {
      largest = currentNum;
    }
  }

  return largest;
}

var largestNum = greatestNumber(numbers);
console.log(largestNum);





//Pt. Four
var myString = "hello, it's me.";

function charFreq(str) {
  var myChar = {};

  for (var k = 0; k < str.length; k++) {
    var currentChar = str.charAt(k);

    if (myChar[currentChar] === undefined) {
      myChar[currentChar] = 0;
    }

    myChar[currentChar]++;
  }

  return myChar;

}

var frequency = charFreq(myString);

for (var l in frequency) {
  console.log(l + ": " + frequency[l]);
}
