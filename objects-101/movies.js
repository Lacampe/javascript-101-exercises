var moviesList = [
  {
    title: 'Inception',
    year: 2010,
    watched: true
  },
  {
    title: 'Avatar',
    year: 2009,
    watched: false
  },
  {
    title: 'The Dark Night',
    year: 2008,
    watched: true
  },
  {
    title: 'The Prestige',
    year: 2006,
    watched: false
  }
]

function listAllMovies(movies) {
  var list = 'The movies in my list are: ';
  movies.forEach(function (movie, index) {
    if (index === (movies.length - 1)) {
      list += movie.title + '.';
    } else if (index === (movies.length - 2)) {
      list += movie.title + ' and ';
    } else {
      list += movie.title + ', ';
    }
  })
  console.log(list);
}

listAllMovies(moviesList);

function findMostRecentMovie(movies) {
  var mostRecentMovie;
  movies.reduce(function (a, b) {
    return mostRecentMovie = a.year > b.year ? a : b;
  })
  console.log(mostRecentMovie.title);
}

findMostRecentMovie(moviesList);

function countUnwatchedMovies(movies) {
  var count = 0;
  movies.forEach(function (movie, index) {
    if (!movie.watched) { count += 1 }
  })
  return count;
}

function watchMovie(title, movies) {
  console.log('You have ' + countUnwatchedMovies(movies) + ' unwatched movies in your list.');
  moviesList.forEach(function (movie, index) {
    if (movie.title === title) {
      if (movie.watched) {
        console.log('You have already watched this movie.');
        return;
      } else {
        console.log('Hope you enjoy this movie ');
        movie.watched = true;
        console.log('You have now have ' + countUnwatchedMovies(movies) + ' unwatched movies in your list.');
        return;
      }
    }
  })
  console.log(title + ' is not in your list.');
}

watchMovie('Inception', moviesList);
watchMovie('The Prestige', moviesList);
watchMovie('Aladin', moviesList);





