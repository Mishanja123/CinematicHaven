import styled from 'styled-components';

export const Overlay = styled.div`
    z-index: 1200;
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
    top: 90px;
    left: 0px;
    width: 630px;
    height: 149px;
    padding: 20px 25px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.8);

    height: auto;
    margin: 0;

`;

export const GenresList = styled.ul`
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    row-gap: 15px;
    column-gap: 15px;
`;

export const GenresItem = styled.li`

`;

export const GenresBtn = styled.button`
    color: rgba(255, 255, 255, 0.7);
    padding: 12px 18px;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 24px;
    &:hover {
        color: rgba(255, 255, 255, 1);

        background-color: rgba(255, 255, 255, 0.7);
    }
`;