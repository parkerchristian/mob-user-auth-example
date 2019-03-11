import loadHeader from './header-component.js';
import loadMovies from './movie-list-component.js';

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