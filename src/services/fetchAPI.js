const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '9fba788361f0940b39e64c54ec217196'
const DEFAULT_PAGE = 1
const LANGUAGE = 'en-US'

async function fetchMovie(url = ''){
    return await fetch(url).then(response => response.json())
}

export const createFetchForTrending = (page = DEFAULT_PAGE) => {
    return fetchMovie(`${BASE_URL}/trending/all/day?api_key=${KEY}&page=${page}&adult=false`)
}

export const createFetchForFullInfo = (movie_id) => {
    return fetchMovie(`${BASE_URL}/movie/${movie_id}?api_key=${KEY}&language=${LANGUAGE}`)
}

export const createFetchForCast = (movie_id) => {
    return fetchMovie(`${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}&language=${LANGUAGE}`)
}

export const createFetchForReviews = (movie_id) => {
    return fetchMovie(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}&language=${LANGUAGE}`)
}

export const createFetchSearchByKeyword = (query, page = DEFAULT_PAGE) => {
    return fetchMovie(`${BASE_URL}/search/movie?api_key=${KEY}&language=${LANGUAGE}&page=${page}&include_adult=false&query=${query}`)
}
