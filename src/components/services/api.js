import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
// const APIKEY = '763efad9fc33d55cb71b4cb29ad482dd';
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzVhZGRlNzJjYjZjNzkwMzkxMDhjYzE0Zjc2NzgyOSIsInN1YiI6IjY0YWUyNDMxOGEwZTliMDBlMzc1YTc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xeqs5DaMHOlE_quNyLNey2tG1GAeaLHSI5GGVan0qnI';
const PARAMS = '?language=en-US';
const options = {
    headers: {
      accept: 'application/json',
      Authorization: TOKEN
    }
  };
// --request GET \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjNlZmFkOWZjMzNkNTVjYjcxYjRjYjI5YWQ0ODJkZCIsInN1YiI6IjY0Y2JmYjQwNDNjZDU0MDBhZGQ1ZDdlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gCjKMJv--hwrNLV7vrzj9rxHW-_u4S-VrEeK7Ox4pIU' \
// --header 'accept: application/json'


//список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export async function getTrandingMovies() {
    try {
        const {data} = await axios.get(`${BASE_URL}trending/all/day?${PARAMS}`, options);
        return data
    } catch (error) {
        console.log(error);
      }
};

export async function getTrailerById(movieId) {
  try {
      const {data} = await axios.get(`${BASE_URL}movie/${movieId}/videos`, options);
      return data
  } catch (error) {
      console.log(error);
    }
};

export async function getUpcomingMovies() {
  try {
      const {data} = await axios.get(`${BASE_URL}movie/upcoming?${PARAMS}&page=1`, options);
      return data
  } catch (error) {
      console.log(error);
    }
};

export async function getPopularMovies() {
  try {
      const {data} = await axios.get(`${BASE_URL}movie/now_playing?${PARAMS}&page=1`, options);
      return data
  } catch (error) {
      console.log(error);
    }
};

//пошук фільму за ключовим словом на сторінці фільмів.
export async function getMoviesByName(name) {
        try {
        const {data} = await axios.get(`${BASE_URL}search/movie?query=${name}&${PARAMS}&include_adult=false`, options);
        return data
    } catch (error) {
        console.log(error);
      }
};

//запит повної інформації про фільм для сторінки кінофільму.
export async function getMovieDetails(id) {
  try{
    const {data} = await axios.get(`${BASE_URL}movie/${id}${PARAMS}`, options);
      return data
       } catch (error) {
      console.error(error);
    }
};

export async function getSimilarMovie(id) {
  try{
    const {data} = await axios.get(`${BASE_URL}movie/${id}/similar`, options);
      return data
       } catch (error) {
      console.error(error);
    }
};

//запит інформації про акторський склад для сторінки кінофільму.
export async function getMovieCast(id) {
    try{
    const {data} = await axios.get(`${BASE_URL}movie/${id}/credits?${PARAMS}`, options);
      return data
       } catch (error) {
      console.error(error);
    }
};

//запит оглядів для сторінки кінофільму.
export async function getMovieReviews(id) {
  try{
    const {data} = await axios.get(`${BASE_URL}movie/${id}/reviews?${PARAMS}`, options);
      return data
       } catch (error) {
      console.error(error);
    }
};

export async function getGenres() {
  try {
    const {data} = await axios.get(`${BASE_URL}genre/movie/list`, options)
    return data
       } catch (error) {
      console.error(error);
    };
};

export async function getMoviesByGenres(id) {
  try {
    const {data} = await axios.get(`${BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`, options)
    return data
       } catch (error) {
      console.error(error);
    };
};