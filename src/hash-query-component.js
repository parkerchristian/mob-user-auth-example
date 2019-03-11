export function writeToQuery(existingQuery, query) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('query', query);
    return searchParams.toString();
}

export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const query = searchParams.get('query');
    return {
        query: query
    };
}