import Slider from "react-slick";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import PlaySvg from '../../Svg/PlaySvg/PlaySvg';
import LikeSvg from '../../Svg/LikeSvg/LikeSvg';

import { List, LiItem, Heading, LinkWrap, MovieInfo, RounderNumber, DisplayTitle, Overview, PlayWrap, Play} from './NowTranding.styled';

export const NowTranding = ({items, location}) => {

    const sliderSettings = {
        className: "",
        autoplay: true,
        autoplaySpeed: 8000,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: -10,
        style: {
          width: 1250,
        },
    };

    return (
        <List>
            <Heading>Now Trending</Heading>
            <Slider
                {...sliderSettings}
            >
            {items.map(({ title, name, poster_path, vote_average, overview, id }) => {
                const roundedNumber = (Math.round(parseFloat(vote_average) * 10) / 10).toFixed(1);
                const displayTitle = title || name;
                return (
                    <LiItem key={id} $backgroundUrl={`https://image.tmdb.org/t/p/original${poster_path}`}>
                        <Link to={`/movies/${id}`} state={{ from: location }} >
                                <LinkWrap>
                                    <RounderNumber>{roundedNumber}</RounderNumber>
                                    <MovieInfo>
                                        <DisplayTitle>{displayTitle}</DisplayTitle>
                                        <PlayWrap>
                                            <Overview>{overview}</Overview>
                                            <Play><PlaySvg/></Play>
                                        </PlayWrap>
                                    </MovieInfo>
                                </LinkWrap>
                        </Link>
                    </LiItem>
                );
            })}
            </Slider>
      </List>
    );
};
NowTranding.propTypes = {
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