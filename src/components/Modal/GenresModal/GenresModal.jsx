import React, { useEffect, useState } from 'react';
import { useNavigate, createSearchParams  } from 'react-router-dom';


import { getGenres } from '../../services/api';

import { Overlay, Modal, GenresList, GenresItem, GenresBtn } from './GenresModal.styled';


export const GenresModal = ({onClose, isCategoryOpen}) => {

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
        if (isCategoryOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isCategoryOpen]);
    
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
          <GenresList>
            {items.map(({id, name}) => {
                return (
                    <GenresItem key={id}>
                        <GenresBtn id ={id} onClick={onGenreClick}>{name}</GenresBtn>
                    </GenresItem>
                )
            })}
          </GenresList>
        </Modal>
      </Overlay>
    );
}
