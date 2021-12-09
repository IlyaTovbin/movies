import { fetchData } from '../../server/Server';

export async function getMovies(term) {
    return await fetchData(`http://localhost:5000/api/movies/${term}`, 'GET')
}

export async function likeHandler(id) {
    return await fetchData(`http://localhost:5000/api/movies/${id}`, 'PUT')
}