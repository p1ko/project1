'use strict';

let numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB ={

    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false,
};

const a=prompt('Last film','');
const b=+prompt('Mark','');

personalMovieDB.movies=a +` `+b;


console.log(personalMovieDB);