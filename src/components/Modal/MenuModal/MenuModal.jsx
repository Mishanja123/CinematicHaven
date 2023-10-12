import React, { useEffect, useState } from 'react';

import { Overlay, Modal } from './MenuModal.styled';
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';


export const MenuModal = ({onClose, isMenuOpen}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuth, email } = useAuth();
    const dispatch = useDispatch();

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
            setIsOpen(true);
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
        <Modal isopen={isOpen}>
            {isAuth ? (
                <>
                    <p>Hi {email}</p>
                    <button onClick={() => dispatch(removeUser())}>Logout</button>
                </>
            ) 
            :
            (<></>)}
        </Modal>
      </Overlay>
    );
}
