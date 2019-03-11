import { makeApiURL } from '../src/make-api-url-component.js';

const test = QUnit.test;

QUnit.module('MAKE API URL');


test('create apu url from search params object', assert => {
    //arrange
    const searchOptions = {
        query: 'star wars'
    };
    const expected = 'https://api.themoviedb.org/3/search/movie?query=star+wars&api_key=9b04e9b50b5df524106f0c1b348dbfb5&language=en-us&include_adult=false';
    //act
    const result = makeApiURL(searchOptions);
    //assert
    assert.equal(result, expected);
});