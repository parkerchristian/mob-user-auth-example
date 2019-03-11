export function writeToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    return searchParams.toString();
}

export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const searchTerm = searchParams.get('searchTerm');
    return {
        searchTerm: searchTerm
    };
}