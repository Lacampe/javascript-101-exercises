// 1 - Define an array of horses names (strings) and store it in a variable
// 2 - Write a while loop that:
//      - delete all horses starting at the 4th one
//      - outputs their names in the terminal like so:
//       "Green horse lost the race."
// 3 - Iterate over the remaining array to display the names of the winning horses in reverse like so:
//      - "3 - Yellow horse"
//      - "2 - Red horse"
//      - "1 - Yellow horse"

var horses = ['Blue horse', 'Red horse', 'Yellow horse', 'Green horse', 'Brown horse'];

while (horses.length > 3) {
  var horse = horses.pop();
  console.log(horse + " lost the race.");
}

console.log('The winning horses are:');

horses.reverse().forEach(function (horse, index) {
  var position = horses.length - index;
  console.log(position + ' - ' + horse);
})
