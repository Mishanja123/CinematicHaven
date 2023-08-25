import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// 196,237,192
export const HeaderBox = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;


  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px) {
  
  }
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 50px;
  @media (max-width: 767px) {
    display: none;
  }
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

export const MenuWrap = styled.div`
display: none;
  display: flex;
  gap: 25px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }

  svg {
    fill: rgba(223, 221, 219, 0.7);
    transition: opacity 0.7s ease, fill 0.7s ease, transform 0.7s ease; 
  }
  &:hover,
  &:focus {
    svg {
      transform: scale(106%);
      fill: rgba(255, 255, 255, 1);
    }
  }
`;

export const MobileMenuBtn = styled.button`
  background: none;
  padding: 0;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }

  svg {
    fill: rgba(223, 221, 219, 0.7);
    transition: opacity 0.7s ease, fill 0.7s ease, transform 0.7s ease; 
  }
  &:hover,
  &:focus {
    svg {
      transform: scale(106%);
      fill: rgba(255, 255, 255, 1);
    }
  }
`;
