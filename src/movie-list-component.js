export function makeMovieTemplate(movie) {
    const html = `
        <li>
            <h2>${movie.title}</h2>
            <img src="${movie.src}">
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
        movieListNode.appendChild(movieLI);
    });
}