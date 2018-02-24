// 1 - Write a function named pluralize that:
//      - takes 2 arguments: a word & a number
//      - outputs the pluralized version of the word in the terminal like so:
//        "2 elephants"
// 2 - Call that function 2 times with different numbers

function pluralize(word, number) {
  var word = number > 1 ? word + 's' : word
  console.log(number + " " + word)
}

pluralize('elephant', 1);
pluralize('elephant', 2);

