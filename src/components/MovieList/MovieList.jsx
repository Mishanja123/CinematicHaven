import { Container, List, Item, Img, NameWrap, MovieTitle, MovieYear } from './MovieList.styled';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import { BackLink } from 'components/BackLink/BackLink';

export const MovieList = ({ movies, location }) => {
    const backPath =  useRef(location.state?.from ?? '/');


    return (
        <>
            <BackLink to={backPath.current} title={"go home"}></BackLink>            
            <List>
                {movies.map(({ id, title, release_date, poster_path }) => {
                const year = release_date.split('-')[0];
                    return (
                        poster_path &&
                        <Item key={id}>
                            <Link to={`/movies/${id}`}  state={{ from: location }}>
                                {poster_path ? <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
                                <NameWrap>
                                    <MovieTitle>{title}</MovieTitle>
                                    <MovieYear>{year}</MovieYear>
                                </NameWrap>
                            </Link>
                        </Item>
                    )
                })}
            </List>
        </>
    );
  };