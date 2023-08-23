import styled from 'styled-components';

export const Overlay = styled.div`
    z-index: 1200;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    // display: flex;
    // align-items: center;
    // justify-content: center;
`;


  
export const Modal = styled.div`
    position:relative;
    top: 100px;
    left: 400px;
`;

export const Iframe = styled.iframe`
    border-radius: 30px;
`;