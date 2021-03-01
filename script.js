'use strict';

let numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?', '');



const personalMovieDB ={

    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false,
};

const n=+prompt('Сколько фильмов за последнее время вы посмотрели?','');

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
if(personalMovieDB.count<10){

    console.log('Просмотрено довольно мало ');
}else if(personalMovieDB.count<30){
    console.log('Вы класический зритель ');
}else if(personalMovieDB.count>30){
    console.log('Вы киноман ');
}else{
    console.log('Eror');
}


console.log(personalMovieDB);