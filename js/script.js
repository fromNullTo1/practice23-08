'use strict';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img');
const promoCont = document.querySelector('.promo__content');
const promoGenre = promoCont.querySelector('.promo__genre');
const promoBg = promoCont.querySelector('.promo__bg');
const promoMovieList = promoCont.querySelector('.promo__interactive-list');
const form = promoCont.querySelector('form');
const input = form.querySelector('input');
const inputCheck = form.querySelector('input[type="checkbox"]');

let trashes;


buildList();
form.addEventListener('submit',e => {
    e.preventDefault();
    let movie = input.value[0].toUpperCase() + input.value.toLowerCase().slice(1);
    if (movie.length > 21) {
        movie = movie.slice(0,21) + '...';
    }
    movieDB.movies.push(movie);
    console.log(movieDB.movies);
    console.log(inputCheck.checked);
    if (inputCheck.checked) {
        console.log('fav movie');
    }   
    form.reset();
    buildList();
})




promoAdv.forEach(e => {
    e.remove();
});
promoGenre.textContent = 'драма';
promoBg.style.backgroundImage = 'url(img/bg.jpg)';

function buildList() {
    promoMovieList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((e, i) => {
        promoMovieList.innerHTML += `    
        <li class="promo__interactive-item">${i+1}. ${e}
            <div class="delete"></div>
        </li>
        `
    });
    trashes = promoCont.querySelectorAll('.delete');
    trashes.forEach((trash, i) => {
        trash.addEventListener('click', () => {
            movieDB.movies.splice(i, 1);
            buildList();
        });
    });    
}


