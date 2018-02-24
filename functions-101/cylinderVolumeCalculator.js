// 1 - Write a function called squareNumber that:
//      - takes 1 argument (a number)
//      - squares that number
//      - return the result
// 2 - Write a function called areaOfCircle that:
//      - takes 1 argument: the circle's radius
//      - uses the previous function to calculate the area (hint: pi)
//      - return the result
// 3 - Write a function called volumeOfCylinder that:
//      - takes 2 arguments: the circle's radius & height
//      - uses the previous function to calculate the volume
//      - outputs the results in the terminal like so:
//        "The volume for a cylinder with a radius of X and a height of Y is Z."
// 4 - Call the last function

function squareNumber(number) {
  return squaredNumber = number * number;
}

function areaOfCircle(radius) {
  return circleArea = squareNumber(radius) * 3.14;
}

function volumeOfCylinder(radius, height) {
  var cylinderVolume = areaOfCircle(radius) * height;
  console.log("The volume for a cylinder with a radius of " + radius + " and a height of " + height + " is " + cylinderVolume + ".");
}

volumeOfCylinder(2, 7);
