import objectToArray from '../src/object-to-array.js';
const test = QUnit.test;

QUnit.module('OBJECT-ARRAY.TEST');

test('create array from object', assert => {
    //arrange
    const object = {
        abc: { id: '335' },
        def: { id: '785775' },
        efg: { id: '845743' }
    };
    const expected = [{ id: '335' }, { id:'785775' }, { id: '845743' }];

    //act
    const result = objectToArray(object);
    //assert
    assert.deepEqual(result, expected);

});