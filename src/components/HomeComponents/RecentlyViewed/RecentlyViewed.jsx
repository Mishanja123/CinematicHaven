import { Link } from 'react-router-dom';

import { PlaySvg } from '../../Svg/PlaySvg/PlaySvg';

import { Container,MovieWrapper, Heading, List, LiItem, DisplayTitle, ImgBox, Play, Img } from './RecentlyViewed.styled';

export const RecentlyViewed = ({ items,location }) => {

    return(
        <Container>
            <MovieWrapper>
                <Heading>Recently Viewed</Heading>
                <List>
                    {items.map(({ title, name, poster_path, id }) => {
                        const displayTitle = title || name;
                        return (
                            <LiItem key={id}>
                                    <ImgBox>
                                        <Img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="poster" />
                                        <DisplayTitle>{displayTitle}</DisplayTitle>
                                    </ImgBox>
                                <Link to={`/movies/${id}`} state={{ from: location }}>
                                    <Play><PlaySvg/></Play>
                                </Link>
                            </LiItem>
                        );
                    })}
                </List>
            </MovieWrapper>
        </Container>
    );
};