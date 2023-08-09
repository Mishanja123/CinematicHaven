import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const HeaderDiv = styled.header`
  width: 100%;
  display: flex;
  padding: 24px 24px;
  background-color: rgba(53, 53, 53, 0.3);
  box-shadow: 1px 1px 20px 0px rgba(240, 255, 255, 10%);
  margin-bottom: 40px;
`;

export const Container = styled.div`

`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
`;