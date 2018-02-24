// 1 - Write a function named isEven that:
//      - takes 1 argument
//      - checks if the number is even (hint: modulus/reminder)
//      - returns true if even or false if odd
// 2 - Write a for loop that:
//      - iterates from 0 to 10
//      - checks if the number is even or odd
//      - outputs the result in the terminal like so:
//        "2 is even"

// Bonus: wrap up that code if the function named evenOddChecker that takes a min & max number as arguments

function isEven(number) {
  var modulus = number % 2;
  return modulus === 0;
}

for (var i = 0; i < 11; i++) {
  if (isEven(i)) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

function evenOddChecker(min, max) {
  for (var i = min; i <= max; i++) {
    var result = isEven(i) ? "even" : "odd"
    console.log(i + " is " + result);
  }
}

evenOddChecker(5, 25);
