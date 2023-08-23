import { useRef } from 'react';

import { AditionalInformation } from '../AditionalInformation/AditionalInformation';
import { SimilarMovie } from '../SimilarMovie/SimilarMovie';
import { BackLink } from 'components/BackLink/BackLink';
import  Cast  from '../Cast/Cast';

import { Container, PosterBox, Poster, InfoBox,TitleWrap, InfoHeading, Year,  GenresList, GenresItem, GenresText, Overview } from './MovieInfo.styled';


export const MovieInfo = ({ poster, title, year, genres, overview, id,location }) => {
    const backPath =  useRef(location.state?.from ?? `/`);

    
    return (
<>
            <BackLink to={backPath.current} title={"go back"}></BackLink>            
        <Container>

            <PosterBox>
                { poster ? <Poster src={''||`https://image.tmdb.org/t/p/original${poster}`} alt="poster" /> : <Poster src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
            </PosterBox>
            <InfoBox>
                <TitleWrap>
                    <InfoHeading>{title}</InfoHeading>
                    <Year>Year: {year}</Year>
                </TitleWrap>
                <GenresList>
                    {genres.map(({name, id}) => {
                        return(
                            <GenresItem key={id}>
                                <GenresText>{name}</GenresText>
                            </GenresItem>
                        )
                    })}                    
                </GenresList>
                <Overview><b>Overview:</b> {overview}</Overview>
                <Cast/>
            </InfoBox>
        </Container>
            <AditionalInformation/>
                <SimilarMovie
                    id={id}
                    location={location}
                />
        </>
    );
};