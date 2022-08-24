'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
    
    
    buildList(movieDB.movies, promoMovieList);

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
        buildList(movieDB.movies, promoMovieList);
    })
    
    
    const deleteAdv = (arr) => {
        arr.forEach(e => {
            e.remove();
        });
    }

    deleteAdv(promoAdv);
   
    promoGenre.textContent = 'драма';
    promoBg.style.backgroundImage = 'url(img/bg.jpg)';

    const makeChanges = () =>
    
    // function buildList() {
    //     promoMovieList.innerHTML = '';
    //     movieDB.movies.sort();
    //     movieDB.movies.forEach((e, i) => {
    //         promoMovieList.innerHTML += `    
    //         <li class="promo__interactive-item">${i+1}. ${e}
    //             <div class="delete"></div>
    //         </li>
    //         `
    //     });
    //     trashes = promoCont.querySelectorAll('.delete');
    //     trashes.forEach((trash, i) => {
    //         trash.addEventListener('click', () => {
    //             movieDB.movies.splice(i, 1);
    //             buildList();
    //         });
    //     });    
    // }
    
    function buildList(arr, parent) {
        parent.innerHTML = '';
        arr.sort();
        arr.forEach((e, i) => {
            parent.innerHTML += `    
            <li class="promo__interactive-item">${i+1}. ${e}
                <div class="delete"></div>
            </li>
            `
        });
        trashes = promoCont.querySelectorAll('.delete');
        trashes.forEach((trash, i) => {
            trash.addEventListener('click', () => {
                arr.splice(i, 1);
                buildList(movieDB.movies, promoMovieList);
            });
        });    
    }
    


});




