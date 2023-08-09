import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'components/services/api';

import { List } from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchCast = async () => {
        try {
          const { cast } = await getMovieCast(movieId);
          setCast(cast);
            } catch (error) {
              console.log(error);
            }
          }
      
          fetchCast();
    }, [movieId]);

    return (
        <List>
            {cast.map(({profile_path,name,id}) => {
                return (
                    <li key={id}>
                        {profile_path ? <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt="cast" />: <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
                        <p>{name}</p>
                    </li>
                )
            })}
        </List>
    );
};

export default Cast;