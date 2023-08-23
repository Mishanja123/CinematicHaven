import { useEffect, useState } from 'react';

import { getPopularMovies } from 'components/services/api';
import { Link } from 'react-router-dom';

import { Container,MovieWrapper, Heading, List, LiItem, MovieInfo,RounderNumber, DisplayTitle } from './PopularMovies.styled'

export const PopularMovies = ({ location }) => {
    const [items, setItems] = useState([]);
    
 

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const result = await getPopularMovies();
                // console.log("pop",result)

                setItems(result.results);
            } catch(e) {
                console.log("Sorry here error");
            }
        }
        fetchPopularMovies();
    }, []);

    return(
        <Container>
            <MovieWrapper>
                <Heading>Most Watching</Heading>
                <List>
                    {items.map(({ title, name, backdrop_path, vote_average, id }) => {
                        const roundedNumber = (Math.round(parseFloat(vote_average) * 10) / 10).toFixed(1);
                        const displayTitle = title || name;
                        // const linkUrl = `https://rezka.ag/search/?do=search&subaction=search&q=${displayTitle}`;
                        return (
                            <LiItem key={id} $backgroundUrl={`https://image.tmdb.org/t/p/w500${backdrop_path}`}>
                                <Link to={`/movies/${id}`} state={{ from: location }}>
                                    {/* <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="poster" /> */}
                                    <MovieInfo>
                                        <RounderNumber>{roundedNumber}</RounderNumber>
                                        <DisplayTitle>{displayTitle}</DisplayTitle>
                                    </MovieInfo>
                                </Link>
                            </LiItem>
                        );
                    })}
                </List>
            </MovieWrapper>
        </Container>
    );
};