import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container,MovieWrapper, Heading, List, LiItem, MovieInfo,RounderNumber, DisplayTitle } from './MostWatching.styled'

export const MostWatching = ({ items,location }) => {

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
MostWatching.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string,
        poster_path: PropTypes.string,
        vote_average: PropTypes.number,
        id: PropTypes.number,
      })
    ).isRequired,
};