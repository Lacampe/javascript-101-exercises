// 1 - Store your current age into a variable
// 2 - Store a maximum age into a variable
// 3 - Store the name of your favorite candy into a variable
// 3 - Store how many of that candy you eat per day (as a number) into a variable
// 4 - Calculate how many you would eat total till the maximum age, and store the result into a variable
// 5 - Output the result to the terminal like so:
//     "You will need X Y to last you until you are Z".

var currentAge = 25;
var maximumAge = 100;
var favoriteCandy = 'crumpets';
var numberADay = 2;
var lifetimeSupply = ((maximumAge - currentAge) * 365) * 2;

console.log("You will need " + lifetimeSupply + " " + favoriteCandy + " to last until you are " + maximumAge);
