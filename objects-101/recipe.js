// 1 - Store an object into a variable with the following keys:
//     - name (string)
//     - prepTime (string)
//     - difficulty (string)
//     - servings (integer)
//     - flavours (array of strings)
//     - ingredients (object)
// 2 - Output the recipe in the terminal like so:
//     "Cupcake takes 20 min to prepare."
//     "It's easy to cook and can serve 8 people."
//     "Here are the different flavours available:"
//     "1 - lemon"
//     "2 - chocolate"
//     "3 - coffee"
//     "To cook it you will need:"
//     "110g of butter"
//     "110g of sugar"
//     "2 of eggs"
//     "1/2 tsp of vanilla"
//     "110g of flour"
//     "Cupcake will be ready in 20 min!"

// Bonus: add a key named cook that holds a function that outputs when the recipe will be ready

var recipe = {
  name: 'Cupcake',
  prepTime: '20 min',
  difficulty: 'easy',
  servings: 8,
  flavours: ['lemon', 'chocolate', 'coffee'],
  ingredients: {
    butter: '110g',
    sugar: '110g',
    eggs: 2,
    vanilla: '1/2 tsp',
    flour: '110g'
  },
  cook: function cookRecipe() {
    console.log(this.name + ' will be ready in ' + this.prepTime + '!');
  }
}

console.log(recipe.name + ' takes ' + recipe.prepTime + ' to prepare.');

console.log("It's " + recipe.difficulty + ' to cook and can serve ' + recipe.servings + ' people.');

console.log('Here are the different flavours available:');
recipe.flavours.forEach(function (flavour, index) {
  console.log((index + 1) + ' - ' + flavour);
})

console.log('To cook it you will need:');
for (var key in recipe.ingredients) {
  console.log(recipe.ingredients[key] + ' of ' + key);
}

recipe.cook();
