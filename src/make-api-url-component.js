const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
const apiKey = '9b04e9b50b5df524106f0c1b348dbfb5';

export function makeApiURL(searchOptions) {
    const url = new URL(BASE_URL);
    url.searchParams.set('searchTerm', searchOptions.searchTerm);
    url.searchParams.set('api_key', apiKey);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', 'false');
    return url.toString();
}