// 1 - Define an array of groceries (strings) and store it into a variable
// 2 - output the number of items in the terminal like so:
//     "I have X item(s) on my grocery list:"
// 3 - Iterate on the array and output the items in the terminal like so:
//     "1 - apples"
//     "2 - pasta"

var groceriesList = ['apples', 'pasta', 'cereals', 'yogurts'];

console.log("I have " + groceriesList.length + " item(s) on my grocery list:");

groceriesList.forEach(function(item, index) {
  console.log((index + 1) + " - " + item);
})
