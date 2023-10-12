import styled from 'styled-components';

export const Overlay = styled.div`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;


  
export const Modal = styled.div`
    position:relative;
    z-index: 10;
    top: 90px;
    left: 0px;
    width: 630px;
    height: auto;
    padding: 20px 25px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 0;

`;

export const CloseBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
    position: absolute;
    z-index: 15;
    top: 20px;
    right: 25px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 50%;
    padding: 2px 6px;
    &:hover {
        color: white;
        background: black;
    }
`;