/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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

promoAdv.forEach(e => {
    e.remove();
});
promoGenre.textContent = 'драма';
promoBg.style.backgroundImage = 'url(img/bg.jpg)';
promoMovieList.innerHTML = '';

movieDB.movies.sort();
movieDB.movies.forEach((e, i) => {
    promoMovieList.innerHTML += `    
    <li class="promo__interactive-item">${i+1}. ${e}
        <div class="delete"></div>
    </li>
    
    `
});


// promo__interactive-item <div class="delete"></div>