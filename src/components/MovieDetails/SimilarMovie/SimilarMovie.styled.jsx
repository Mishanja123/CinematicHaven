import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SecondHeading = styled.h3`

    @media screen and (min-width: 768px) and (max-width: 1199px) {
        font-size: 16px;
    }
    
    @media screen and (min-width: 1200px) {
        font-size: 20px;

    }
    
`;

export const List = styled.ul`
    display: flex;
    gap: 14px;
    max-width: 286px;
    overflow: auto;

    @media screen and (min-width: 768px) and (max-width: 1199px) {
        max-width: 736px;

    }
    
    @media screen and (min-width: 1200px) {
        max-width: 1160px;
    }
`;

export const LiItem = styled.li`

    @media screen and (min-width: 768px) and (max-width: 1199px) {

    }
    
    @media screen and (min-width: 1200px) {
    }

    a {
        text-decoration: none;
        color: #fff;

    }

`;
export const Title = styled.p`  
    font-weight: 500;
    font-size: 10px;
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        font-size: 11px;
    }
    
    @media screen and (min-width: 1200px) {
        font-size: 14px;

    }
`;


export const Img = styled.img`
        margin-bottom: 5px;
        border-radius: 20px;
        width: 90px;
        height: 135px;


    @media screen and (min-width: 768px) and (max-width: 1199px) {
        width: 100px;
        height: 150px;
    }
    
    @media screen and (min-width: 1200px) {
        width: 150px;
        height: 225px;
        margin-bottom: 5px;
    }
`;