import styled from 'styled-components';



export const SecondHeading = styled.h3`
    margin: 0;

    @media screen and (min-width: 768px) {
        font-size:  15px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`;

export const List = styled.ul`
    display: flex;
    gap: 12px;
    max-width: 300px;
    overflow: auto;
    
    @media screen and (min-width: 768px) {
        max-width: 400px;
    }
    
    @media screen and (min-width: 1200px) {
        max-width: 740px;
    }
`;

export const LiItem = styled.li`

`;

export const Title = styled.p`
        font-size:  9px;

    @media screen and (min-width: 768px) {
        font-size:  12px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 14px;
    }
`;

export const Img = styled.img`
    border-radius: 10px;
    margin-bottom: 5px;
    width: 80px;

    @media screen and (min-width: 768px) {
        border-radius: 20px;
        width: 90px;

        heigt: 225px;
    }

    @media screen and (min-width: 1200px) {
        width: 155px;
        height: 232px;
    }
`;