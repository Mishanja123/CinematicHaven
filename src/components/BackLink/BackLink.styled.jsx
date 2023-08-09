import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    width: 80px;
    border: 2px solid gray;
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
    margin-bottom: 30px;  
    padding: 8px 0;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    :hover {
        color: green;
    };
`;