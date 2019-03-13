import { makeHeaderTemplate, makeProfileTemplate } from '../src/header-component.js';
const test = QUnit.test;

QUnit.module('HEADER COMPONENT TESTS');

test('create template for base header', assert => {
    //Arrange
    const expected = `
        <div id="static-header">
            <img src="" alt="">
            <h1>Read a Book</h1>
            <a href="/">Home</a>
            <a href="favorites.html">Favorites</a>
        </div>
    `;
    //Act
    const result = makeHeaderTemplate();
    //Assert
    assert.htmlEqual(result, expected);
});

test('create profile display from template', assert => {
    const expected = `
        <div id="profile-display">
            <img src="placeholder-image.jpg" alt="">
            <h2>Marty Martinez</h2>
            <button id="sign-out">Sign Out</button>
        </div>
    `;
    const user = {
        displayName: 'Marty Martinez',
        photoURL: 'placeholder-image.jpg'
    };
    //Act
    const result = makeProfileTemplate(user);
    //Assert
    assert.htmlEqual(result, expected);
});