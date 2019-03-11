import { makeMovieTemplate } from '../src/movie-list-component.js';
const test = QUnit.test;

QUnit.module('MOVIE LIST TESTS');

test('create movie template test', assert => {
    // arrange
    const movie = {
        title: 'Movie title',
        src: 'https://images-na.ssl-images-amazon.com/images/I/91zh7rLwI3L._SY606_.jpg'
    };
    const expected = `
        <li>
            <h2>Movie title</h2>
            <img src="https://images-na.ssl-images-amazon.com/images/I/91zh7rLwI3L._SY606_.jpg">
        </li>
    `;
    // act

    const result = makeMovieTemplate(movie);
    // assert
    assert.htmlEqual(result, expected);
});
