import styled from 'styled-components';

export const Overlay = styled.div`
    z-index: 1200;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
`;


  
export const Modal = styled.div`
    position:relative;
    top: -40px;
    left: 0px;
`;

export const Iframe = styled.iframe`
    width: 290px; 
    height: 180px;
    @media screen and (min-width: 768px) {
        width: 696px;
        height: 380px;

    }

    @media screen and (min-width: 1200px) {
        width: 862px; 
        height: 460px;

    }
`;