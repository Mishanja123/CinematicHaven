import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const HeaderDiv = styled.header`
  
  display: flex;
  justify-content: center;
  padding: 24px 24px;
  box-shadow: 1px 1px 20px 0px rgba(240, 255, 255, 10%);
  margin-bottom: 40px;
`;

export const Container = styled.div`

`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  &.active {
    color: orange;
  }
`;