'use strict';

let numberOfFilms;

function start() {
    numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms ==''|| numberOfFilms == null || isNaN(numberOfFilms)){

        numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}

start();

const personalMovieDB ={

    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false,
};

function writeYourGenders() {

    for(let i=1; i<=3; i++){
        
        personalMovieDB.genders[i-1]=prompt(`Ваш любимий жанр под номером ${i}`);

    }
    
}
writeYourGenders();

const n=+prompt('Сколько фильмов за последнее время вы посмотрели?','');

function rememberMyFilms() {
    
    for(let i=0;i<n;i++){

        const a=prompt('Фильм который вы смотрели','');
        const b=+prompt('Оценка для даного фильма','');
    
        if(a !=null && b!=null && a!=''&& b!=''&& a.length<50){
    
            personalMovieDB.movies[a]=b;
    
        }else{
    
            console.log('EROR!!!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    
    if(personalMovieDB.count<10){

        console.log('Просмотрено довольно мало ');
    }else if(personalMovieDB.count<30){
        console.log('Вы класический зритель ');
    }else if(personalMovieDB.count>30){
        console.log('Вы киноман ');
    }else{
        console.log('Eror');
    }
}

detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.private==false){
        return console.log(personalMovieDB);
    }else{
        console.log('Eror');
    }
    
}
showMyDB();


//console.log(personalMovieDB);