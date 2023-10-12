import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import { getUpcomingMovies } from 'components/services/api';
import { useAuth } from 'hooks/use-auth';
import { addToWatchlist } from 'components/services/watch-list';

import { TrailerModal } from '../../Modal/TrailerModal/TrailerModal';
import MoreSvg from '../../Svg/MoreSvg/MoreSvg';
import PlaySvg from '../../Svg/PlaySvg/PlaySvg';
import LikeSvg from '../../Svg/LikeSvg/LikeSvg'
import { List, LiItem, MovieInfo, InfoBtn,PlayBtn, RounderNumber, DisplayTitle, BtnWrap, LikeBtn, MovieOverview, Number, InfoWrap,BackgroundLayer, } from './UpcomingMovies.styled';

export const UpcomingMovies = ({ location }) => {
  const [items, setItems] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isTrailerOpen, setIsTraileOpen] = useState(false);
  const {id, isAuth} = useAuth();
  const navigate = useNavigate();


  const openTrailer = (movieId) => {
    setSelectedMovieId(movieId);
    setIsTraileOpen(true);
  };
  
  const closeTrailer = () => {
    setIsTraileOpen(false);
  };

  const handleClick = async (movieId, title, poster_path, overview) => {
    if (!isAuth) return navigate("/login");
    addToWatchlist(id, movieId, title, poster_path, overview);
  }


  useEffect(() => {
      const fetchUpcomingMovies = async () => {
          try {
              const result = await getUpcomingMovies();
              setItems(result.results);
          } catch(e) {
              console.log("Sorry here error");
          }
      }
      fetchUpcomingMovies();
  }, []);

  const sliderSettings = {
    className: "slider",
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 2180,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    style: {

    },
  };

  return (
    <>
      <List>
        <Slider 
          {...sliderSettings}
        >
          {items.map(({ title, name, backdrop_path, vote_average, id, overview, poster_path }) => {
            const roundedNumber = (Math.round(parseFloat(vote_average) * 10) / 10).toFixed(1);
            const displayTitle = title || name;
            return (
              <LiItem key={id} $backgroundUrl={`https://image.tmdb.org/t/p/original${backdrop_path}`}>
                <BackgroundLayer>
                </BackgroundLayer>
                <MovieInfo>
                  <Number>
                    <RounderNumber>{roundedNumber}</RounderNumber>
                  </Number>
                  <InfoWrap>
                    <DisplayTitle>{displayTitle}</DisplayTitle>
                    <MovieOverview>{overview}</MovieOverview>
                    <BtnWrap>
                      <PlayBtn onClick={()=>openTrailer(id)}><PlaySvg/>Play trailer</PlayBtn>
                      <Link to={`/movies/${id}`} state={{ from: location }}>
                        <InfoBtn><MoreSvg/>More info</InfoBtn>
                      </Link>
                      <LikeBtn onClick={() => handleClick(id, title||name, poster_path, overview)}><LikeSvg/></LikeBtn>
                    </BtnWrap>
                  </InfoWrap>
                </MovieInfo>          
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