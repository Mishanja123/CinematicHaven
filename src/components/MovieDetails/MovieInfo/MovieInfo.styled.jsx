import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 35px;
    margin-bottom: 60px;
`;

export const PosterBox = styled.div`

`;

export const Poster = styled.img`
    width: 360px;
    border-radius: 30px;
`;



export const InfoBox = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
`;

export const TitleWrap = styled.span`

`;

export const InfoHeading = styled.h1`

`;

export const Year = styled.span`

`;

export const GenresList = styled.ul`
    display: flex;
    gap: 7px;
`;

export const GenresItem = styled.li`
    padding: 12px 17px;
    border-radius: 24px;
    background: rgba(130, 130, 130, 0.50);
    backdrop-filter: blur(4.5px);
`;

export const GenresText = styled.p`
    color: #FAFAFA;
    text-edge: cap;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
`;

export const Overview = styled.p`
    max-width: 500px;
    height: 70px;
    overflow-x: auto;
`;



