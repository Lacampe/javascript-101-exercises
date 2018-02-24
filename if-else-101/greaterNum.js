// 1 - Write a function named greaterNum that:
//      - takes 2 arguments (both numbers)
//      - returns whichever number is the greater
//      - outputs the result to the terminal like so:
//        "The greater number of 5 and 10 is 10."
// 2 - Call that function 2 times with different number pairs

function greaterNum(firstNum, secondNum) {
  if (firstNum > secondNum) {
    var greater = firstNum;
  } else {
    var greater = secondNum;
  }
  console.log("The greater number of " + firstNum + " and " + secondNum + " is " + greater);
}

greaterNum(2, 5);
greaterNum(32, 9);
