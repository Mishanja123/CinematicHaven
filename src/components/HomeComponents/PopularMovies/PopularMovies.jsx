import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getPopularMovies } from 'components/services/api';
import { useAuth } from 'hooks/use-auth';
import { addToWatchlist } from 'components/services/watch-list';

import { Container,MovieWrapper, Heading, List, LiItem, MovieInfo, RounderWrap, LikeBtn, RounderNumber, DisplayTitle } from './PopularMovies.styled'
import LikeSvg from 'components/Svg/LikeSvg/LikeSvg';

export const PopularMovies = ({ location }) => {
    const [items, setItems] = useState([]);
    const {id, isAuth} = useAuth();
    const navigate = useNavigate();
 
    const handleClick = async (movieId, title, poster_path, overview) => {
        if (!isAuth) return navigate("/login");
        addToWatchlist(id, movieId, title, poster_path, overview);
      }
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
                    {items.map(({ title, name, backdrop_path, vote_average, id, poster_path, overview }) => {
                        const roundedNumber = (Math.round(parseFloat(vote_average) * 10) / 10).toFixed(1);
                        const displayTitle = title || name;
                        // const linkUrl = `https://rezka.ag/search/?do=search&subaction=search&q=${displayTitle}`;
                        return (
                            <LiItem key={id} $backgroundUrl={`https://image.tmdb.org/t/p/w500${backdrop_path}`}>

                                <Link to={`/movies/${id}`} state={{ from: location }}>
                                    {/* <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="poster" /> */}
                                    <MovieInfo>
                                        <RounderWrap>
                                            <RounderNumber>{roundedNumber}</RounderNumber>
                                            <LikeBtn onClick={() => handleClick(id, title||name, poster_path, overview)}><LikeSvg/></LikeBtn>
                                        </RounderWrap>
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