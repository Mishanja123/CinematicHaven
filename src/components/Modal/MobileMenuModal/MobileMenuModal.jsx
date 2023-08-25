import React, { useEffect, useState } from 'react';
import { useNavigate, createSearchParams  } from 'react-router-dom';
import { getGenres } from '../../services/api';


import LikeSvg from '../../Svg/LikeSvg/LikeSvg';
import HomeSvg from '../../Svg/HomeSvg/HomeSvg'

import { Overlay, Modal, Nav, Link, GenresList, GenresItem, GenresBtn} from './MobileMenuModal.styled';


export const MobileMenuModal = ({onClose, isMobileMenuOpen}) => {

    const [items, setItems] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            onClose();
        }
        };
        document.addEventListener("keydown", handleKeyDown, false);
        return () => {
        document.removeEventListener("keydown", handleKeyDown, false);
        };
    }, [onClose]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const results = await getGenres();
                setItems(results.genres);
            } catch(e) {
                console.log("Sorry here error");
            }
        }
        fetchGenres();
    }, []);

    const onGenreClick = (e) => {
        const genreId = e.currentTarget.id
        navigate({
            pathname:"/",
            search: `?${createSearchParams({genreId})}`
        }) 
    }


    return (
      <Overlay onClick={onClose}>
        <Modal>
            <Nav>
                <Link to="/" end>
                    <HomeSvg/>
                </Link>
                <Link to="/liked">
                    <LikeSvg/>
                </Link>
            </Nav>
            <h3>Cetegories:</h3>
            <GenresList>
                {items.map(({id, name}) => {
                    return (
                        <GenresItem key={id}>
                            <GenresBtn id ={id} onClick={onGenreClick}>{name}</GenresBtn>
                        </GenresItem>
                    )
                })}
            </GenresList>
            <button>privet</button>
        </Modal>
      </Overlay>
    );
}
