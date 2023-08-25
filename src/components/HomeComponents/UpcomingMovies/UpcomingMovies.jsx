import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { getUpcomingMovies } from 'components/services/api';

import {TrailerModal} from '../../Modal/TrailerModal/TrailerModal';
import MoreSvg from "../../Svg/MoreSvg/MoreSvg";
import PlaySvg from "../../Svg/PlaySvg/PlaySvg"
import LikeSvg from '../../Svg/LikeSvg/LikeSvg';



import { List, LiItem, MovieInfo, InfoBtn,PlayBtn, RounderNumber, DisplayTitle, BtnWrap,MovieOverview, Number, InfoWrap,BackgroundLayer, LikeBtn } from './UpcomingMovies.styled';


export const UpcomingMovies = ({ location }) => {

  const [items, setItems] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isTrailerOpen, setIsTraileOpen] = useState(false);
    
  useEffect(() => {
      const fetchUpcomingMovies = async () => {
          try {
              const result = await getUpcomingMovies();
              // console.log("up",result)
              setItems(result.results);
          } catch(e) {
              console.log("Sorry here error");
          }
      }
      fetchUpcomingMovies();
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
          {items.map(({ title, name, backdrop_path, vote_average, id, overview }) => {
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
                      <LikeBtn><LikeSvg/></LikeBtn>
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




// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Link } from 'react-router-dom';

// import { LiItem, MovieInfo,RounderNumber, DisplayTitle } from '../PopularMoviesList/PopularMoviesList.styled';

// import {} from './Slider.styled';

// export const Slider = ({items, location}) => {
//     const responsive = {
//         superLargeDesktop: {
//           breakpoint: { max: 4000, min: 3000 },
//           items: 7
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 5
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 3
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };

//     return (
//         <Carousel
//             swipeable={false}
//             draggable={false}
//             responsive={responsive}
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={5000}
//             keyBoardControl={true}
//             customTransition="all 1s linear"
//             transitionDuration={1000}
//             containerClass="carousel-container"
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             itemClass="carousel-item-padding-40-px">   
//                 {items.map(({ title, name, backdrop_path, vote_average, id }) => {
//                         const roundedNumber = (Math.round(parseFloat(vote_average) * 10) / 10).toFixed(1);
//                         const displayTitle = title || name;
//                         // const linkUrl = `https://rezka.ag/search/?do=search&subaction=search&q=${displayTitle}`;
//                         return (
//                             <LiItem key={id} $backgroundUrl={`https://image.tmdb.org/t/p/original${backdrop_path}`}>
//                                         {/* <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="poster" /> */}
//                                             <MovieInfo>
//                                                 <RounderNumber>{roundedNumber}</RounderNumber>
//                                                 <DisplayTitle>{displayTitle}</DisplayTitle>
//                                             </MovieInfo>
//                                         <Link to={`/movies/${id}`} state={{ from: location }}>
//                                             <button>More info</button>
//                                         </Link>
//                                     </LiItem>
//                         );
//                     })}
//         </Carousel>
//     );
// };