import loadHeader from './header-component.js';
import loadMovies from './movie-list-component.js';
import './search-component.js';
import { readFromQuery } from './hash-query-component.js';
import { makeApiURL } from './make-api-url-component.js';
import { auth } from './firebase.js';

loadHeader();

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    const url = makeApiURL(searchOptions);
    
    if(!existingQuery) {
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadMovies(body.results);
        });
}

window.addEventListener('hashchange', loadQuery);

auth.onAuthStateChanged(() => {
    loadQuery();
});