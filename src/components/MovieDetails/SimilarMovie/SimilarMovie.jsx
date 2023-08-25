import { useState, useEffect } from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';



import { getSimilarMovie } from '../../services/api';
 import { Box, SecondHeading, List, LiItem, Title, Img} from './SimilarMovie.styled';

export const SimilarMovie = ({id, location}) => {
    const [similarMovie, setSimilarMovie] = useState([]);

    useEffect(() => {
        const fetchSimilarMovies = async() => {
            try {
                const {results} = await getSimilarMovie(id);
                setSimilarMovie(results)
            }catch(error) {
                console.log(error);
            }
        }
        fetchSimilarMovies();

    },[id]);

    // const sliderSettings = {
    //     className: "slider",
    //     autoplay: true,
    //     autoplaySpeed: 10000,
    //     dots: false,
    //     infinite: true,
    //     speed: 800,
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     swipeToSlide: true,
    //     focusOnSelect: true,
    //     centerMode: true,
    //     centerPadding: -20,
    // };

    return (
        <Box>
        <SecondHeading>Similar movies</SecondHeading>
        <List>
        {/* <Slider
            {...sliderSettings}
        > */}
            {similarMovie.map(({poster_path, title, id}) => {
                return (
                    <LiItem key={id}>
                        <Link to={`/movies/${id}`} >
                        {poster_path ? <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="cast" />: <Img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
                            <Title>{title}</Title>
                        </Link>
                    </LiItem>
                )
            })}
        {/* </Slider> */}
        </List>
        </Box>
    );
};