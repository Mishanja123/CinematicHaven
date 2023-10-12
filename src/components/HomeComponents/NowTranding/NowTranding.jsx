import Slider from "react-slick";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import { getTrandingMovies } from "components/services/api";
import { useAuth } from 'hooks/use-auth';
import { addToWatchlist } from 'components/services/watch-list';


import PlaySvg from '../../Svg/PlaySvg/PlaySvg';
import ComeSvg from '../../Svg/ComeSvg/ComeSvg';
import {TrailerModal} from '../../Modal/TrailerModal/TrailerModal';

import { List, LiItem, Heading, LinkWrap, MovieInfo, RounderNumber, RounderWrap, DisplayTitle, Overview, TitleWrap, LikeBtn, Btn, BtnWrap} from './NowTranding.styled';
import LikeSvg from "components/Svg/LikeSvg/LikeSvg";

export const NowTranding = ({ location}) => {
    const [items, setItems] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [isTrailerOpen, setIsTraileOpen] = useState(false);
    const {id, isAuth} = useAuth();
    const navigate = useNavigate();
    
    const handleClick = async (movieId, title, poster_path, overview) => {
        if (!isAuth) return navigate("/login");
        addToWatchlist(id, movieId, title, poster_path, overview);
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const result = await getTrandingMovies();
                // console.log("now",result)

                setItems(result.results);
            } catch(e) {
                console.log("Sorry here error");
            }
        }
        fetchMovies();
    }, []);

    const openTrailer = (movieId) => {
        setSelectedMovieId(movieId);
        setIsTraileOpen(true);
      };
      
      const closeTrailer = () => {
        setIsTraileOpen(false);
      };
      

    const sliderSettings = {
        className: "slider",
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: -9,
        style: {
        },
    };

    return (
        <>
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
                        <LinkWrap>
                            <RounderWrap>
                                <RounderNumber>{roundedNumber}</RounderNumber>
                                <LikeBtn onClick={() => handleClick(id, title||name, poster_path, overview)}><LikeSvg/></LikeBtn>
                            </RounderWrap>
                                    <MovieInfo>
                                        <TitleWrap>
                                            <DisplayTitle>{displayTitle}</DisplayTitle>
                                            <Overview>{overview}</Overview>
                                        </TitleWrap>
                                        <BtnWrap>
                                            <Btn onClick={()=>openTrailer(id)}><PlaySvg/></Btn>
                                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                                <Btn><ComeSvg/></Btn>
                                            </Link>
                                        </BtnWrap>
                                    </MovieInfo>
                        </LinkWrap>
                    </LiItem>
                );
            })}
            </Slider>
      </List>
       {isTrailerOpen && selectedMovieId && (
        <TrailerModal onClose={closeTrailer} isTrailerOpen={isTrailerOpen} MovieId={selectedMovieId} />
      )}
     </>
    );
};