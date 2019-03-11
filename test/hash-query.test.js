import { writeToQuery, readFromQuery } from '../src/hash-query-component.js';

const test = QUnit.test;

QUnit.module('QUERY TESTING');



test('write search to query', assert => {
    // arrange
    const query = 'star wars';
    const existingQuery = '';
    const expected = 'query=star+wars';
    // act
    const result = writeToQuery(existingQuery, query);
    // assert
    assert.equal(result, expected);
});

test('write search to query with existing query', assert => {
    // arrange
    const query = 'star wars';
    const existingQuery = 'query=sponge+bob';
    const expected = 'query=star+wars';
    // act
    const result = writeToQuery(existingQuery, query);
    // assert
    assert.equal(result, expected);
});



test('read from query', assert => {    
    // arrange
    const existingQuery = 'query=sponge+bob';
    const expected = { query: 'sponge bob' };
    // act
    const result = readFromQuery(existingQuery);
    // assert
    assert.deepEqual(result, expected);
});