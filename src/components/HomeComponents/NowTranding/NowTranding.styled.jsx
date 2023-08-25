import styled from 'styled-components';

export const Heading = styled.h2`
    leading-trim: both;
    color: #FAFAFA;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1;

    @media screen and (min-width: 768px) {
        font-size: 15px;
    }
`;

export const List = styled.ul`

    .slider {
        width: 290px;
        height: 125px;

        @media screen and (min-width: 768px) {
            width: 696px;
            height: 320px;
        }

        @media screen and (min-width: 1200px) {
            width: 830px;
            height: 345px;
        }
    }
`;

export const LiItem = styled.li`
    max-width: 84px;
    height: 125px;
    border-radius: 16px;
    background: url(${props => props.$backgroundUrl}) no-repeat;
    background-size:cover;

    @media screen and (min-width: 768px) {
        border-radius: 25px;
        max-width: 220px;
        height: 320px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 262px;
        height: 345px;
    }
    
    a {
        text-decoration: none;
        margin-top: 0;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
    };
    
`;



export const RounderNumber = styled.span`
    display: flex;
    justify-content: center;  
    align-items: center;
    font-size: 7px;
    font-weight: bold;
    width: 30px;
    height: 18px;
    color: white;
    background-color: #CA7900;
    border-radius: 16px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        width: 58px;
        height: 30px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 17px;
        width: 68px;
        height: 36px;
    }
`;

export const DisplayTitle = styled.span`
    opacity:1;
    font-size: 8px;

    transition: opacity 600ms ease;
    font-weight: 700;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.2;
    }

    @media screen and (min-width: 1200px) {
        font-size: 18px;
        line-height: 1.4;
    }
`;

export const Overview = styled.span`
    display: none;

    @media screen and (min-width: 768px) {
        display:block;
        opacity: 0.8;
        font-size: 12px;
        font-weight: 400;
        max-width: 160px;
        height: 90px;
        overflow-y: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 190px;
    }
`;

export const MovieInfo = styled.span`
    opacity: 0;
    display: flex;  
    flex-direction: column;
    gap:7px;


    backdrop-filter: blur(20px);
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    padding: 5px 5px 5px;
    margin: 0;
    transition: opacity 0.7s ease;

    @media screen and (min-width: 768px) {
        gap: 0px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        padding: 10px 10px 10px;
        min-height: 160px;
    }

    @media screen and (min-width: 1200px) {
    }
`;

export const LinkWrap = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 125px;

    @media screen and (min-width: 768px) {
        height: 320px;
    }

    @media screen and (min-width: 1200px) {
        height: 345px;
    }

    &:hover ${MovieInfo} {
        opacity: 1;
    }
`;


export const TitleWrap = styled.span`
    display: flex;
    flex-direction: column;
    gap: 15px;

`;

export const BtnWrap = styled.span`
    display: flex;
    justify-content: center;
    gap:10px;

    @media screen and (min-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const Btn = styled.button`
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transition:background-color 0.7s ease ;
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);

    svg {
        width: 12px;
        height: 12px;
        fill: white;
        transition: fill 0.7s ease;
    }

    @media screen and (min-width: 768px) {
        width: 35px;
        height: 35px;
        svg {
            width: 20px;
            height: 20px;
        }
    }
    &:hover {
        background-color: #fff;

        svg {
            fill: black;
        }
    }
`;
