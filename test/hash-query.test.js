import { writeToQuery, readFromQuery } from '../src/hash-query-component.js';

const test = QUnit.test;

QUnit.module('QUERY TESTING');



test('write search to query', assert => {
    // arrange
    const searchTerm = 'star wars';
    const existingQuery = '';
    const expected = 'searchTerm=star+wars';
    // act
    const result = writeToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, expected);
});

test('write search to query with existing query', assert => {
    // arrange
    const searchTerm = 'star wars';
    const existingQuery = 'searchTerm=sponge+bob';
    const expected = 'searchTerm=star+wars';
    // act
    const result = writeToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, expected);
});



test('read from query', assert => {    
    // arrange
    const existingQuery = 'searchTerm=sponge+bob';
    const expected = { searchTerm: 'sponge bob' };
    // act
    const result = readFromQuery(existingQuery);
    // assert
    assert.deepEqual(result, expected);
});