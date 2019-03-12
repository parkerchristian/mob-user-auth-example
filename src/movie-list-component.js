import { auth, favoritesByUserRef } from './firebase.js';

export function makeMovieTemplate(movie) {
    const BASE_IMG_URL = `https://image.tmdb.org/t/p/w154${movie.poster_path}`;
    const html = `
        <li>
            <span class="favorite-star">☆</span>
            <h2>${movie.title}</h2>
            <img src="${BASE_IMG_URL}">
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const movieListNode = document.getElementById('movie-list');

export default function loadMovies(movies) {
    while(movieListNode.children.length) {
        movieListNode.lastElementChild.remove();
    }
    movies.forEach(movie => {
        const movieLI = makeMovieTemplate(movie);
        const favoriteStar = movieLI.querySelector('.favorite-star');
        const userID = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userID);
        const userFavoriteMovieRef = userFavoritesRef.child(movie.id);

        let isFavorite = false;

        userFavoriteMovieRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                if(value) {
                    isFavorite = true;
                    favoriteStar.textContent = '★';
                    favoriteStar.classList.add('favorite');
                }
                else {
                    isFavorite = false;
                    favoriteStar.textContent = '☆';
                    favoriteStar.classList.remove('favorite');
                }
            });

        favoriteStar.addEventListener('click', () => {

            if(isFavorite) {
                isFavorite = false;
                userFavoriteMovieRef.remove();
                favoriteStar.classList.remove('favorite');
                favoriteStar.textContent = '☆';
            }
            else {
                isFavorite = true;
                favoriteStar.textContent = '★';
                favoriteStar.classList.add('favorite');

                userFavoriteMovieRef.set({
                    id: movie.id,
                    title: movie.title,
                    poster_path: `https://image.tmdb.org/t/p/w154${movie.poster_path}`
                });
            }
        });
        movieListNode.appendChild(movieLI);
    });
}