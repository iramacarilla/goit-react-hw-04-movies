import axios from 'axios'

const key = 'c72898b84d10e0a84473676d73ed2d77'
const fetchMovie = () => {
    const API = `https://api.themoviedb.org/3/trending/all/day?api_key=c72898b84d10e0a84473676d73ed2d77`;
    return axios.get(API).then(res => res.data.results)
   // return fetch(API).then(res => res)
   // .then(data => data)
}
const fetchSearchMovie = (searchItem) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchItem}&page=1`)
    .then(response=>response.data.results)
}
const fetchMovieInfo = (moviesId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=${key}&language=en-US&page=1`)
    .then(response=>response.data)
}
const fetchMovieCredits = (moviesId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=${key}&language=en-US`)
    .then(response=>response.data)
}
const fetchMovieReviews = (moviesId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=${key}&language=en-US`)
    .then(response=>response.data.results)
}
export default {fetchMovie, fetchMovieInfo, fetchSearchMovie, fetchMovieCredits, fetchMovieReviews}
/*https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1*/