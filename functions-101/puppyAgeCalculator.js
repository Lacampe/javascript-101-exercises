// 1 - Write a function named calculateDogAge that:
//      - takes 1 argument: your puppy's age
//      - calculates your puppy's age (1 human year = 7 dog years) and store it into a variable
//      - outputs the result to the terminal like so:
//        "Your puppy is X years old in dog years."
// 2 - Call the function

// Bonus: Add a 2nd argument to the function that takes the conversion rate of human to dog years

function calculateDogAge(age, conversationRate) {
  var ageInDogYears = age * conversationRate;
  console.log("Your puppy is " + ageInDogYears + " years old in dog years.");
}

calculateDogAge(2, 7);
