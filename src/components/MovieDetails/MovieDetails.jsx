import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

import { BackLink } from "../BackLink/BackLink";

import { Container, ContainerTitle, List, GenresList, InfoDiv } from './MovieDetail.styled';

const MovieDetails = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [overview, setOverview] = useState('');
    const [poster, setPoster] = useState('');
    const [voteAverage, setAverage] = useState('');
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
                setAverage(voteAverage);
            }catch(error) {
                console.log(error);
            }
        }
        fetchDetails();
    },[movieId]);

    return (
        <>
            <BackLink to={backPath.current}>Go back</BackLink>
            <Container>
                <List>
                    <li>
                        { poster ? <img src={''||`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
                        <span>{voteAverage}%</span>
                    </li>
                </List>
                <ContainerTitle>
                    <ul>
                        <li>
                            <h1>{title}</h1>
                            <span>Year: {year}</span>
                        </li>
                        <li>
                            <h2>Overview:</h2>
                            <p>{overview}</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <GenresList>  
                                <h3>Genres:</h3>
                                {genres.map(({name, id}) => {
                                    return(
                                        <li key={id}>
                                            <p>{name} /</p>
                                        </li>
                                    )
                                })}                    
                             </GenresList>
                        </li>
                    </ul>
                    <InfoDiv>
                        <h3>Aditional information</h3>
                        <ul>
                            <li>
                                <Link to="cast">
                                    Cast
                                </Link>
                            </li>
                            <li>
                                <Link to="reviews">
                                    Reviews
                                </Link>
                            </li>
                        </ul>
                    </InfoDiv>
                </ContainerTitle> 
            </Container>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>  
        </>
    );
};

export default MovieDetails;