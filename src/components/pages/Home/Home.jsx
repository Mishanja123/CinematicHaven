import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrandingMovies } from '../../services/api';
// import { Section } from '../../Sections/Section'

import { MostWatching } from '../../HomeComponents/MostWatching/MostWatching';
import { RecentlyViewed } from '../../HomeComponents/RecentlyViewed/RecentlyViewed';
import  { PopularMovies } from '../../HomeComponents/PopularMovies/PopularMovies';
import { NowTranding } from '../../HomeComponents/NowTranding/NowTranding';

import { HomeBox,Container } from './Home.styled';




const Home = () => {
    const [items, setItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const result = await getTrandingMovies();
                console.log(result)
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
        <HomeBox>
            <Container>
                <MostWatching
                    items={items}
                    location={location}
                /> 
                <RecentlyViewed
                    items={items}
                    location={location}
                />
           </Container>
           <Container>
                <PopularMovies
                    items={items}
                    location={location}
                />
                <NowTranding
                    items={items}
                    location={location}
                />
            </Container>
        </HomeBox>
        </>
    );
};

export default Home;