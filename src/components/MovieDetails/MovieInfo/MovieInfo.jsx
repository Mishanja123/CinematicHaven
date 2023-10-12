import { useRef, useState } from 'react';

import { AditionalInformation } from '../AditionalInformation/AditionalInformation';
import { TrailerModal } from 'components/Modal/TrailerModal/TrailerModal';
import { SimilarMovie } from '../SimilarMovie/SimilarMovie';
import { BackLink } from 'components/BackLink/BackLink';
import  Cast  from '../Cast/Cast';

import { BackdropBox, BackdropContent, BackgroundLayer, TrailerBtn, LikeBtn, Container, PosterBox, Poster, InfoBox,TitleWrap, InfoHeading, Year,  GenresList, GenresItem, GenresText, Overview, HeadingWraper, RoundedNumber } from './MovieInfo.styled';
import PlaySvg from 'components/Svg/PlaySvg/PlaySvg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { addToWatchlist } from 'components/services/watch-list';
import LikeSvg from 'components/Svg/LikeSvg/LikeSvg';


export const MovieInfo = ({ poster, title, year, genres, overview, movieId, backdrop, average, location }) => {
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [isTrailerOpen, setIsTraileOpen] = useState(false);
    const {id, isAuth} = useAuth();
    const navigate = useNavigate();
    const backPath =  useRef(location.state?.from ?? `/`);

    const roundedNumber = (Math.round(parseFloat(average) * 10) / 10).toFixed(1);
  
    const openTrailer = (movieId) => {
        console.log(movieId)
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

    return (
<>
            {/* <BackLink to={backPath.current} title={"go back"}></BackLink>    */}

                <BackdropBox $backgroundUrl={`https://image.tmdb.org/t/p/original${backdrop}`}>
                    <BackgroundLayer>
                    </BackgroundLayer>

                    <BackdropContent>
                    <HeadingWraper>
                        <InfoHeading>{title}</InfoHeading>
                        <LikeBtn onClick={() => handleClick(movieId, title, poster, overview)}><LikeSvg/></LikeBtn>
                    </HeadingWraper>
                    <GenresList>
                        {genres.map(({name, id}) => {
                            return(
                                <GenresItem key={id}>
                                    <GenresText>{name}</GenresText>
                                </GenresItem>
                            )
                        })}                    
                    </GenresList>
                    </BackdropContent>
                    <TrailerBtn onClick={()=>openTrailer(movieId)}><PlaySvg/></TrailerBtn>
                    <RoundedNumber>{roundedNumber}</RoundedNumber>
                </BackdropBox>

        <Container>
            <PosterBox>
                { poster ? <Poster src={''||`https://image.tmdb.org/t/p/original${poster}`} alt="poster" /> : <Poster src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
            </PosterBox>
            <InfoBox>
                <TitleWrap>
                    
                    <Year>Year: {year}</Year>
                </TitleWrap>

                <Overview><b>Overview:</b> {overview}</Overview>
                <Cast/>
            </InfoBox>
        </Container>
            <AditionalInformation/>
                <SimilarMovie
                    id={movieId}
                    location={location}
                />
                      {isTrailerOpen && selectedMovieId && (
        <TrailerModal onClose={closeTrailer} isTrailerOpen={isTrailerOpen} MovieId={selectedMovieId} />
      )}               
      
        </>
    );
};