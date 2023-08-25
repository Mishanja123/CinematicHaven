import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 60px;
    @media screen and (min-width: 768px) {
        align-items: flex-start;
        flex-direction: row;
        margin-bottom: 60px;
        gap: 35px;

    }

    @media screen and (min-width: 1200px) {

    }
`;

export const PosterBox = styled.div`


    @media screen and (min-width: 768px) {

    }

    @media screen and (min-width: 1200px) {

    }
`;

export const Poster = styled.img`
    width: 286px;

    border-radius: 30px;
    @media screen and (min-width: 768px) {
        width: 260px;
    }

    @media screen and (min-width: 1200px) {
        width: 360px;
    }
`;



export const InfoBox = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;

    width: 286px;
    @media screen and (min-width: 768px) {
        width: auto;
        gap: 15px;
    }

    @media screen and (min-width: 1200px) {
        gap: 25px;
    }
`;

export const TitleWrap = styled.span`

`;

export const InfoHeading = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        margin-bottom: 20px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 27px;
    }
`;

export const Year = styled.span`
        font-size:  13px;

    @media screen and (min-width: 1200px) {
        font-size: 15px;
    }
`;

export const GenresList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    @media screen and (min-width: 768px) {
        font-size:  13px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 15px;
    }
`;

export const GenresItem = styled.li`
    
    border-radius: 24px;
    background: rgba(130, 130, 130, 0.50);
    backdrop-filter: blur(4.5px);
    padding: 5px 10px;

    @media screen and (min-width: 768px) {
        padding: 10px 15px;
    }

    @media screen and (min-width: 1200px) {
        padding: 12px 17px;
    }
`;

export const GenresText = styled.p`
    color: #FAFAFA;
    text-edge: cap;
    font-size: 9px;
    font-weight: 600;
    line-height: normal;

    @media screen and (min-width: 768px) {
        font-size:  10px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 12px;
    }
`;

export const Overview = styled.p`
    opacity: 0.7;
    overflow-x: auto;

    @media screen and (min-width: 768px) {
        font-size: 13px;
        max-width: 500px;
        height: 70px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 16px;
        max-width: 600px;
        height: 70px;
    }
`;



