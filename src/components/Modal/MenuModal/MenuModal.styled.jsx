import styled from 'styled-components';

export const Overlay = styled.div`
    z-index: 1200;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    // display: flex;
    // align-items: center;
    // justify-content: center;
`;


  
export const Modal = styled.div`
    position:relative;
    top: 120px;
    left: 955px;
    width: 630px;
    height: 200px;
    padding: 20px 25px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.8);

    margin: 0;

`;