import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../auth/firebase';
import { useAuth } from '../../../hooks/use-auth';
import { removeFromWatchList } from 'components/services/watch-list';

import { UnAuth } from './UnAuth';
import DeleteSvg from 'components/Svg/DeleteSvg/DeleteSvg';
import NextSvg from 'components/Svg/NextSvg/NextSvg';
import PreviousSvg from 'components/Svg/PreviousSvg/PreviousSvg';

import { BackgroundLayer, Box, List, Item, Img, TextWrap, Title, Overview, Button } from './WatchList.styled';


const WatchList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { id, isAuth } = useAuth();

  const itemsPerPage = 4;
  const offset = currentPage * itemsPerPage;
  const currentPageItems = items.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if(!isAuth) return;
    const getWatchlist = async(uid) => {
      const watchlistRef = doc(db, "watchlists", uid);
      const watchlistSnap = await getDoc(watchlistRef);
    
      if (watchlistSnap.exists()) {
        const data = watchlistSnap.data().movies;
        setItems(data);
      }
    }
    getWatchlist(id);
  }, [id, items]);


  const handleClick = (movieId, title, poster_path, overview) => {
    removeFromWatchList(id, movieId, title, poster_path, overview);
  }

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    navigate(`?page=${selectedPage + 1}`);
  };

  return (
    <>
      {isAuth ? (
        <Box>
          <List>
            {currentPageItems.map(({movieId, poster_path, title, name, overview}) => (
              <Item key={movieId}>
                <BackgroundLayer></BackgroundLayer>
                <Link to={`/movies/${movieId}`} state={{ from: location }}>
                {poster_path ? <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" /> : <Img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}</Link>
                <TextWrap>
                  <Title>{title || name}</Title>
                  <Overview>{overview}</Overview>
                </TextWrap>
                <Button onClick={() => handleClick(movieId, title || name, poster_path, overview)}><DeleteSvg/></Button>
              </Item>
            ))}
          </List>
          {items.length < 5 ? undefined :           
          <ReactPaginate
            previousLabel={<PreviousSvg/>}
            nextLabel={<NextSvg/>}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            // activeClassName={"active"}
            previousClassName={"pagination__prev"}
            nextClassName={"pagination__next"}
            pageClassName={"pagination__page"}
            breakClassName={"pagination__break"}
            disabledClassName={"pagination__disabled"}
            activeClassName={"pagination__active"}
          />}
        </Box>
      ) : (
        <UnAuth/>
      )}
    </>
  );
};

export default WatchList;