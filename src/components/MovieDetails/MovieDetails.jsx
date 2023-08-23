import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

import { MovieInfo } from './MovieInfo/MovieInfo';


const MovieDetails = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [overview, setOverview] = useState('');
    const [poster, setPoster] = useState('');
    const [genres, setGenres] = useState([]);
    const location = useLocation();
    const backPath =  useRef(location.state?.from ?? '/');
    const { movieId } = useParams();


    useEffect(() => {
        const fetchDetails = async() => {
            try {
                const results = await getMovieDetails(movieId);
                const year = results.release_date.split('-')[0];
                const voteAverage = Math.ceil(parseFloat(results.vote_average) * 10);
                setGenres(results.genres);
                setTitle(results.title);
                setYear(year);
                setOverview(results.overview);
                setPoster(results.poster_path);
            }catch(error) {
                console.log(error);
            }
        }
        fetchDetails();
    },[movieId]);

    return (
        <>
            <MovieInfo
                poster={poster}
                title={title}
                year={year}
                genres={genres}
                overview={overview}
                id={movieId}
                location={location}
            />


        </>
    );
};

export default MovieDetails;
