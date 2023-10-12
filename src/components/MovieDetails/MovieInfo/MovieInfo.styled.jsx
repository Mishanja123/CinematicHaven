import styled from 'styled-components';



export const BackdropBox = styled.div`
    position:relative;
    z-index: 1;
    background: url(${props => props.$backgroundUrl}) no-repeat;
    border-radius:13px;
    background-size: cover;
    width:100%;
    height:260px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);


    @media screen and (min-width: 768px) {
        height:370px;
    }

    @media screen and (min-width: 1200px) {
        height:420px;
    }
`;

export const RoundedNumber = styled.span`
    position: absolute;
    top: 0;
    z-index: 3;
    font-size: 7px;
    font-weight: bold;
    color: white;
    background-color: #CA7900;
    display: flex;
    justify-content: center;  
    align-items: center;
    width: 35px;
    height: 20px;
    border-radius: 13px;
    box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.5);


    @media screen and (min-width: 768px) {
        font-size: 15px;
        width: 65px;
        height: 35px;
    }
`;

export const BackgroundLayer = styled.span`
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(40, 40, 40, 0.5);
    border-radius: 13px;
    filter: blur(35px);
    z-index: 1;

    transition:  background-color 0.7s, filter 0.7s;
    &:hover {
        background-color: rgba(40, 40, 40, 0.1);
        filter: blur(0);
    }
`;

export const BackdropContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    height:226px;
    padding: 17px 17px;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 768px) {
        height:336px;
    }

    @media screen and (min-width: 1200px) {
        height:386px;
    }

`;




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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    
    border-radius: 20px;
    @media screen and (min-width: 768px) {
        width: 260px;
    }

    @media screen and (min-width: 1200px) {
        width: 240px;
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

export const HeadingWraper = styled.span`
    display: flex;
    align-items: center;
    gap:15px;

    @media screen and (min-width: 768px) {
        gap:20px;
    }

    @media screen and (min-width: 1200px) {
        gap:20px;
    }

`;

export const InfoHeading = styled.h1`
    font-size: 20px;

    @media screen and (min-width: 768px) {
        margin-bottom: 20px;
        font-size: 30px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 40px;
    }
`;

export const TrailerBtn = styled.button`
    position: absolute;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    transition:background-color 0.7s ease ;
    // box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
    box-shadow: 0 2px 15px rgba(255, 255, 255, 0.5);

    svg {
        width: 30px;
        height: 30px;
        fill: white;
        transition: fill 0.7s ease;
    }
    &:hover {
        background-color: #fff;

        svg {
            fill: black;
        }
    }

    @media screen and (min-width: 768px) {
        width: 68px;
        height: 68px;
        svg {
            width: 45px;
            height: 45px;
        }
    }
`;

export const LikeBtn = styled.button`
    cursor: pointer;
    padding: 0;
    border: none;
    opacity: 0.7;
    background-color:  rgba(255, 255, 255, 0);
    margin-bottom: 11px;
    transition: opacity 0.9s ease;
    svg {
        fill: rgba(223, 221, 219, 0.7);
        transition: fill 0.9s ease, opacity 0.9s ease;
    }    svg {
        width:13px;
        height: 13px;
        fill: rgb(255, 255, 255);
        transition: fill 0.9s ease;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 18px;

        svg {
            width: 22px;
            height: 22px;
        }
    }

    @media screen and (min-width: 1200px) {
        margin-bottom: 14px;
        svg {
            width: 25px;
            height: 25px;
        }
    }

    &:hover {
        opacity: 1;   
        svg {
            fill: rgba(255, 255, 255, 1);
        }
    }
    &:focus {
        opacity: 1;
        svg {
            fill: rgba(255, 255, 255, 1);
        }
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
    max-width: 80%;

    @media screen and (min-width: 768px) {
        font-size: 15px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`;



