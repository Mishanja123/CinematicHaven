import styled from 'styled-components';



export const SecondHeading = styled.h3`
    margin-bottom: 13px;

    @media screen and (min-width: 768px) {
        font-size:  15px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 16px;
    }
`;

export const List = styled.ul`
border-radius: 12px;
    padding: 10px 10px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    gap: 11px;
    max-width: 100%;
    overflow: auto;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);

    
    @media screen and (min-width: 768px) {
        max-width: 420px;
    }
    
    @media screen and (min-width: 1200px) {
        max-width: 870px;
    }
`;

export const LiItem = styled.li`

`;

export const Title = styled.p`
    text-align: center;
    font-size:  9px;

    @media screen and (min-width: 768px) {
        font-size:  10px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 11px;
    }
`;

export const Img = styled.img`
    border-radius: 10px;
    margin-bottom: 5px;
    width: 80px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 768px) {
        border-radius: 13px;
        width: 55px;
    }

    @media screen and (min-width: 1200px) {
        width: 70px;
    }
`;