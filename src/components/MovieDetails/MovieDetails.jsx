import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

import { MovieInfo } from './MovieInfo/MovieInfo';


const MovieDetails = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [overview, setOverview] = useState('');
    const [poster, setPoster] = useState('');
    const [genres, setGenres] = useState([]);
    const [backdrop, setBackdrop] = useState('');
    const [average, setAverage] = useState('');
    const location = useLocation();
    const { movieId } = useParams();


    useEffect(() => {
        const fetchDetails = async() => {
            try {
                const results = await getMovieDetails(movieId);
                const year = results.release_date.split('-')[0];
                setGenres(results.genres);
                setTitle(results.title);
                setYear(year);
                setOverview(results.overview);
                setPoster(results.poster_path);
                setBackdrop(results.backdrop_path);
                setAverage(results.vote_average);
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
                backdrop={backdrop}
                average={average}
                movieId={movieId}
                location={location}
            />
        </>
    );
};

export default MovieDetails;
