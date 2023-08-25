import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getTrandingMovies, getMoviesByGenres, getMoviesByName } from '../../services/api';
import { MovieList } from 'components/MovieList/MovieList';
// import { Section } from '../../Sections/Section'

import { PopularMovies } from '../../HomeComponents/PopularMovies/PopularMovies';
import { RecentlyViewed } from '../../HomeComponents/RecentlyViewed/RecentlyViewed';
import  { UpcomingMovies } from '../../HomeComponents/UpcomingMovies/UpcomingMovies';
import { NowTranding } from '../../HomeComponents/NowTranding/NowTranding';
// import { GenresModal } from '../../GenresModal/GenresModal';

import { HomeBox,Container } from './Home.styled';



const Home = () => {
    const [searchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const [movies, setMovies] = useState([]);

    
    const searchGenre = searchParams.get("genreId")
    const searchQuery = searchParams.get("query") ?? "";
    const location = useLocation();

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const { results } = await getTrandingMovies();
                setItems(results);
            }   catch(e) {
                    console.log("Sorry here error");
                }
        }

        const fetchByGenres = async () => {
            try {
                const { results } = await getMoviesByGenres(searchGenre);
                setMovies(results);       
            }   catch(e) {
                    console.log("Sorry here error");
                }
        }

        const findMovie = async () => {
            try {
                const { results } = await getMoviesByName(searchQuery);
                setMovies(results);
            }   catch(e) {
                    console.log("Sorry here error");
                }
        }

        fetchMovies();
        if (searchGenre) {
            fetchByGenres();
        } else if (searchQuery) {
            findMovie();
        }
    }, [searchGenre, searchQuery]);



    return(
        <>
            {(searchQuery || searchGenre) ?
                <MovieList
                    movies={movies}
                    location={location}
                />
            :   
                <HomeBox> 
                    <Container>
                    <PopularMovies
                            location={location}
                        /> 
                    </Container>
                    <Container>
                        <UpcomingMovies
                            location={location}
                        />
                    </Container>
                    <Container>
                        <RecentlyViewed
                            items={items}
                            location={location}
                        />
                    </Container>
                    <Container>
                        <NowTranding
                            location={location}
                        />
                    </Container>
                </HomeBox>
            }
        </>
    );
};

export default Home;
