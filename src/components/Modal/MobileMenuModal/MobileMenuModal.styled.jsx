import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


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
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 50px 80px 50px 50px;
    background-color: rgba(0, 0, 0, 0.8);
    margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
`;

export const Link = styled(NavLink)`
  height: 35px;
  width: 30px;
  position: relative;
    svg {
      transition-duration: 1200ms;
      fill: rgba(223, 221, 219, 0.7);
    }
    &.active {
      svg {
        transform: scale(107%);
        fill: rgba(255, 255, 255, 1);
      }
    }
    &.active::after {
      opacity: 1;
      };
      &::after {
        content: ''; 
        position: absolute; 
        bottom: 0; 
        left: 0; 
        width: 100%; 
        height: 3px; 
        background-color: rgba(196,237,192, 1);
        opacity: 0; 
        transition: opacity 0.7s ease; 
      }
`;

export const GenresList = styled.ul`
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    row-gap: 12px;
    column-gap: 12px;
`;

export const GenresItem = styled.li`

`;

export const GenresBtn = styled.button`
    color: rgba(255, 255, 255, 0.7);
    padding: 10px 16px;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 24px;
    &:hover {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(255, 255, 255, 0.7);
    }
`;