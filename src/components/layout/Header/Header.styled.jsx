import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// 196,237,192
export const HeaderDiv = styled.header`
  margin-bottom: 48px;
`;

export const Container = styled.div`

`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 70px;
`;

export const Link = styled(NavLink)`
  width: 40px;
  position: relative;
    svg {
      transition-duration: 1200ms;
      fill: rgba(223, 221, 219, 0.7);
    }
    &.active {
      svg {
        transform: scale(106%);
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


