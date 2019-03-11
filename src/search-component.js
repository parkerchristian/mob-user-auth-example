import { writeToQuery } from './hash-query-component.js';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchInput = searchForm.querySelector('input');
    const searchTerm = searchInput.value;
    const existingQuery = window.location.hash.slice(1);
    const hashQuery = writeToQuery(existingQuery, searchTerm);
    window.location.hash = hashQuery;
});