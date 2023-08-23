import React, { useEffect } from 'react';


import { Overlay, Modal } from './MenuModal.styled';


export const MenuModal = ({onClose, isMenuOpen}) => {


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
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isMenuOpen]);


    return (
      <Overlay onClick={onClose}>
        <Modal>

        </Modal>
      </Overlay>
    );
}
