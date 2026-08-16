// task #3 - object with user info
const person = {
  name: 'Ilnar',
  surname: 'Esanov',
  age: 24,
  country: 'Uzbekistan',
  city: 'Termiz',
  isMarried: false,
  children: null,
  position: 'product card specialist',
  languages: ['russian', 'uzbek', 'english'],
};

// task #4 - car info
const carInfo = {
  name: 'Chevrolet',
  model: 'Nexia',
  yearOfProduction: 2025,
  color: 'white',
  transmission: 'automatic',
};

carInfo.owner = person;

// task #5 - max speed check function
const hasMaxSpeed = (object) => {
  if (object.maxSpeed) {
    console.log('This already exists');
    return;
  } else {
    object.maxSpeed = '200 km/h';
    console.log(object, 'maxSpeed was added!');
  }
};

// hasMaxSpeed(carInfo);

// task #6 - object property
const objectKeys = (object, objectKey) => {
  console.log(object[objectKey]);
};

// objectKeys(carInfo, 'yearOfProduction');

// task #7 - array
const products = ['watermelon', 'apple', 'pears'];

// task #8 - array with objects
const movies = [
  {
    title: 'avengers',
    year: 2010,
    duration: 160,
    isWatched: true,
  },

  {
    title: 'spider man',
    year: 2005,
    duration: 120,
    isWatched: true,
  },

  {
    title: 'Thor',
    year: 2015,
    duration: 150,
    isWatched: false,
  },
];

movies.push({
  title: 'Hulk',
  year: 2020,
  duration: 200,
  isWatched: false,
});

// console.log(movies);

// task #9
const tvSeries = [
  {
    title: 'peaky blinders',
    year: 2015,
    duration: 60,
    isWatched: true,
  },

  {
    title: 'peacemaker',
    year: 1980,
    duration: 70,
    isWatched: false,
  },
];

const watchedMovies = [...movies, ...tvSeries];
// console.log(watchedMovies);

// task #10 - добавляем isRare через map
const isMovieOld = watchedMovies.map((movie) => ({
  ...movie,
  isOld: movie.year < 2000,
}));
isMovieOld.forEach((movie) => {
  if (movie.isOld) {
    console.log(`The ${movie.title} is old`);
  } else {
    console.log(`the ${movie.title} is new`);
  }
});
