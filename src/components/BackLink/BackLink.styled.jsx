import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 30px;  
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.4s ease ;
    svg {
        transition: fill 0.4s ease;
    }
    &:hover {
        color: #fff;
        svg {
            fill: #fff;
        }
    }
`;