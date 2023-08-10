import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    display: inline-block;
    margin-bottom: 30px;  
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
        color: orange;
    }
`;