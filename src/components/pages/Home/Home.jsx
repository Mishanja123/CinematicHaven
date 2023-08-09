import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrandingMovies } from '../../services/api';
// import { Section } from '../../Sections/Section'

import { TrandingMoviesList } from '../../TrandingMoviesList/TrandingMoviesList';


const Home = () => {
    const [items, setItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const result = await getTrandingMovies();
                setItems(result.results);
                // console.log("&", result)
            } catch(e) {
                console.log("Sorry here error");
            }
        }
        fetchMovies();
    }, []);

    return(
        <>
            <TrandingMoviesList
                items={items}
                location={location}
           /> 
        </>
    );
};

export default Home;