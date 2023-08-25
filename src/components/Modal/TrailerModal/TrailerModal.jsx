import React, { useEffect, useState } from 'react';

import { getTrailerById } from '../../services/api';

import { Overlay, Modal, Iframe } from './TrailerModal.styled';


export const TrailerModal = ({onClose, isTrailerOpen, MovieId}) => {

    const [videoKey, setVideoKey] = useState('');

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
        if (isTrailerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isTrailerOpen]);
    
    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const {results} = await getTrailerById(MovieId);
                const officialTrailer = results.find(trailer => trailer.name === 'Official Trailer' || "Official US Trailer");

                if (officialTrailer) {
                  const key = officialTrailer.key;
                  setVideoKey(key);
                }
            } catch(e) {
                console.log("Sorry here error");
            }
        }
        fetchTrailer();
    }, [MovieId]);




    return (
      <Overlay onClick={onClose}>
        <Modal>
            <Iframe  src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`} frameBorder="0" allowFullScreen></Iframe>
        </Modal>
      </Overlay>
    );
}
