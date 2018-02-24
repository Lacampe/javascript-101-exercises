// 1 - Write a function named translateGreetings that:
//      - takes 2 arguments: a name & a language code (en, fr, es)
//      - outputs the greetings in the terminal based on the language like so:
//        "Hello, Alex!"
//      - it should default to english
// 2 - Call that function 3 times with different language codes

function translateGreetings(name, languageCode) {
  if (languageCode === 'fr') {
    var greetings = 'Bonjour';
  } else if (languageCode === 'es') {
    var greetings = 'Ola';
  } else {
    var greetings = 'Hello'
  }
  console.log(greetings + ", " + name + "!");
}

translateGreetings('Alex', 'fr');
translateGreetings('Alex', 'es');
translateGreetings('Alex', 'en');
