const test = QUnit.test;

QUnit.module('OBJECT-ARRAY.TEST');

function objectToArray(object) {
    const keys = Object.keys(object);
    return keys.map(key => object[key]);
}

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