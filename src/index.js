import loadHeader from './header-component.js';
import loadMovies from './movie-list-component.js';
import './search-component.js';
import { readFromQuery } from './hash-query-component.js';
import { makeApiURL } from './make-api-url-component.js';

loadHeader();
const movies = [
    {
        title: 'Movie title',
        src: 'https://images-na.ssl-images-amazon.com/images/I/91zh7rLwI3L._SY606_.jpg'
    },
    {
        title: 'Movie title',
        src: 'https://images-na.ssl-images-amazon.com/images/I/91zh7rLwI3L._SY606_.jpg'
    },
    {
        title: 'Movie title',
        src: 'https://images-na.ssl-images-amazon.com/images/I/91zh7rLwI3L._SY606_.jpg'
    },
    {
        title: 'Movie title',
        src: 'https://images-na.ssl-images-amazon.com/images/I/91zh7rLwI3L._SY606_.jpg'
    }
];

loadMovies(movies);

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    const url = makeApiURL(searchOptions);
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadMovies(body.results);
            console.log(body);
        });
});