import styled from 'styled-components';

export const Box = styled.div`
    margin-bottom: 50px;
`;


export const SecondHeading = styled.h3`

    @media screen and (min-width: 768px) {
        font-size: 19px; 
    }
    
    @media screen and (min-width: 1200px) {
        font-size: 24px; 
    }
    
`;

export const List = styled.ul`
    display: flex;
    gap: 12px;
`;
export const LiItem = styled.li`
    max-width: 150px;
    a {
        color: #fff;
        @media screen and (min-width: 768px) {
            font-size: 13px; 
        }
        
        @media screen and (min-width: 1200px) {
            font-size: 15px; 
        }
    }

`;