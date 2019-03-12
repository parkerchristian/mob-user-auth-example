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
        favoriteStar.addEventListener('click', () => {
            const userID = auth.currentUser.uid;
            const userFavoritesRef = favoritesByUserRef.child(userID);
            const userFavoriteMovieRef = userFavoritesRef.child(movie.id);
            userFavoriteMovieRef.set({
                id: movie.id,
                title: movie.title,
                poster_path: `https://image.tmdb.org/t/p/w154${movie.poster_path}`
            });

        });
        movieListNode.appendChild(movieLI);
    });
}