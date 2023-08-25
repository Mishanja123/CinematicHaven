import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    display: flex;
    width:110px;
    font-size: 15px;
    justify-content: flex-end;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 15px;  
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.4s ease ;

    svg {
        width: 25px;
        height: 25px;
        fill:rgba(0, 0, 0, 0.5);
        transition: fill 0.4s ease;
    }
    &:hover {
        color: #fff;
        svg {
            fill: #fff;
        }
    }
`;