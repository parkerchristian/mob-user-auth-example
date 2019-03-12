import { makeMovieTemplate } from '../src/movie-list-component.js';
const test = QUnit.test;

QUnit.module('MOVIE LIST TESTS');

test('create movie template test', assert => {
    // arrange
    const movie = {
        title: 'Movie title',
        poster_path: '/fr8XRJiXppZdDy5E0IOH9OgVQHu.jpg'
    };
    const expected = `
        <li>
            <h2>Movie title</h2>
            <img src="https://image.tmdb.org/t/p/w154/fr8XRJiXppZdDy5E0IOH9OgVQHu.jpg">
        </li>
    `;
    // act

    const result = makeMovieTemplate(movie);
    // assert
    assert.htmlEqual(result, expected);
});
