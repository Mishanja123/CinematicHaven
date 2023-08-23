import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';



import { getSimilarMovie } from '../../services/api';
 import { SecondHeading, List, LiItem, Title, Img} from './SimilarMovie.styled';

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

    const sliderSettings = {
        className: "",
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 7,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: -18,
        style: {
          width: 1740,
        },
    };

    return (
        <>
            <SecondHeading>Similar movies:</SecondHeading>
        <List>
        <Slider
            {...sliderSettings}
        >
            {similarMovie.map(({poster_path, title, id}) => {
                return (
                    <LiItem key={id}>
                        <Link to={`/movies/${id}`} >
                            <Img src={`https://image.tmdb.org/t/p/w500${poster_path
}`} alt="poster"/>    
                            <Title>{title}</Title>
                        </Link>
                    </LiItem>
                )
            })}
        </Slider>
        </List>
        </>
    );
};