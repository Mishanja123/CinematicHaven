import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, List} from './TrandingMoviesList.styled'

export const TrandingMoviesList = ({ items,location }) => {

    return(
        <Container>
            <h2>Tranding movies</h2>
            <List>
                {items.map(({ title, name, poster_path, vote_average, id }) => {
                    const ratingPercentage = Math.ceil(parseFloat(vote_average) * 10);
                    const displayTitle = title || name;
                    // const linkUrl = `https://rezka.ag/search/?do=search&subaction=search&q=${displayTitle}`;
                    return (
                        <li key={id}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" />
                                <span>{ratingPercentage}%</span>
                                <p>{displayTitle}</p>
                            </Link>
                        </li>
                    );
                })}
            </List>
        </Container>
    );
};
TrandingMoviesList.propTypes = {
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