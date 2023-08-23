import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import { getMovieCast } from 'components/services/api';

import {SecondHeading, List, LiItem, Title, Img} from './Cast.styled';

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
        focusOnSelect: true,
        centerMode: true,
        centerPadding: -18,
        style: {
          width: 1300,
        },
    };

    return (
        <>
        <SecondHeading>Cast:</SecondHeading>
        <List>
            <Slider
                {...sliderSettings}
            >
            {cast.map(({profile_path,name,id}) => {
                return (
                    <LiItem key={id}>
                        {profile_path ? <Img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt="cast" />: <Img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
                        <Title>{name}</Title>
                    </LiItem>
                )
            })}
            </Slider>
        </List>
        </>
    );
};

export default Cast;