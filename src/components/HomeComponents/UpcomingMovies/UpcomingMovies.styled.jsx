import styled from 'styled-components';




export const List = styled.ul`
    .slider {
        width: 292px;

        @media screen and (min-width: 768px) {
            width: 696px;
        }
    
        @media screen and (min-width: 1200px) {
            width: 830px;
            height: 345px;
        }
    }
    .slick-dots li button:before {
        display: none;

        @media screen and (min-width: 768px) {
            display:block;
            font-size: 4px; 
        }
        @media screen and (min-width: 1200px) {
            font-size: 6px; 

        }

`;

export const LiItem = styled.li`
    position: relative;
    overflow: hidden;
    min-width: 292px;
    height:150px;
    border-radius:16px;
    margin: 0;
    background: url(${props => props.$backgroundUrl}) no-repeat;
    background-size:cover;

    @media screen and (min-width: 768px) {
        border-radius:23px;
        min-width: 696px;
        height: 345px;
    }
    @media screen and (min-width: 1200px) {
        min-width: 830px;
    }

    a {
        text-decoration: none;
        margin-top: 0;
    }


`;

export const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    @media screen and (min-width: 768px) {
        gap: 10px;
    }

    @media screen and (min-width: 1200px) {
        gap: 15px;
    }
`;

export const InfoBtn = styled.button`
    cursor: pointer;
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 5px;
    color: rgb(255, 255, 255);
    font-size: 7px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 4px 7px;
    border: none;
    border-radius: 10px;
    background: rgba(250, 250, 250, 0.30);
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
    backdrop-filter: blur(20px);
    transition: opacity 0.9s ease, background 0.9s ease, color 0.9s ease; 

    svg {
        width:13px;
        height: 13px;
        fill: rgb(255, 255, 255);
        transition: fill 0.9s ease;
    }

    @media screen and (min-width: 768px) {
        font-size: 12px;
        padding: 8px 11px;

        svg {
            width: 20px;
            height: 20px;
            fill: rgb(255, 255, 255);
            transition: fill 0.9s ease;
        }
    }

    @media screen and (min-width: 1200px) {
        font-size: 13px;
        padding: 9px 12px;

        svg {
            width: 22px;
            height: 22px;
            fill: rgb(255, 255, 255);
            transition: fill 0.9s ease;
        }
    }

    &:hover {
        background: rgba(255, 255, 255);
        opacity: 1;
        color: #2E2E2E;
        svg {
            fill: #2E2E2E;
        }
    }
`;

export const PlayBtn = styled.button`
    cursor: pointer;
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 3px;
    color: rgb(255, 255, 255);
    font-size: 7px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 4px 7px;
    border: none;
    border-radius: 10px;
    background: rgba(250, 250, 250, 0.30);
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
    backdrop-filter: blur(20px);
    transition: opacity 0.9s ease, background 0.9s ease, color 0.9s ease; 

    svg {
        width:13px;
        height: 13px;
        fill: rgb(255, 255, 255);
        transition: fill 0.9s ease;
    }

    @media screen and (min-width: 768px) {
        font-size: 12px;
        padding: 8px 11px;

        svg {
            width: 20px;
            height: 20px;
            fill: rgb(255, 255, 255);
            transition: fill 0.9s ease;
        }


    }

    @media screen and (min-width: 1200px) {
        font-size: 13px;
        padding: 9px 12px;

        svg {
            width: 22px;
            height: 22px;
            fill: rgb(255, 255, 255);
            transition: fill 0.9s ease;
        }
    }

    &:hover {
        background: rgba(255, 255, 255);
        opacity: 1;
        color: #2E2E2E;
        svg {
            fill: #2E2E2E;
        }
    }
`;


// пробный вариант для добавления в избранное
export const LikeBtn = styled.button`
    cursor: pointer;
    padding: 0;
    border: none;
    opacity: 0.7;
    background-color:  rgba(255, 255, 255, 0);
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
        svg {
            width: 22px;
            height: 22px;
        }
    }

    @media screen and (min-width: 1200px) {
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
//////////////////////////////////////////////

export const Number = styled.span`

`;

export const BackgroundLayer = styled.span`
content: "";
position: absolute;
top: 0;
left: 0;
width: 50%;
height: 100%;
background-color: rgba(40, 40, 40, 0.55);
filter: blur(35px);
z-index: 1;
border-top-right-radius: 90%;
`;

export const MovieInfo = styled.span`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:150px;

    @media screen and (min-width: 768px) {
        height: 345px;
    }

    @media screen and (min-width: 1200px) {

    }
`;

export const InfoWrap = styled.span`
    display:flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 0 8px 8px;
    

    @media screen and (min-width: 768px) {
        gap: 10px;
        padding: 0 0 16px 16px;
    }
`;

export const DisplayTitle = styled.span`
    max-width: 100px;
    color: #FAFAFA;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;

    @media screen and (min-width: 768px) {
        max-width: 300px;
        font-size: 20px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 320px;
        font-size: 24px;
    }
`;


export const MovieOverview = styled.span`
    display: none;
    color: #BCBCBC;
    leading-trim: both;
    font-size: 7px;
    font-weight: 400;
    max-width: 145px;
    max-height: 40px;
    overflow: auto;
    @media screen and (min-width: 768px) {
        max-height: 100%;
        display: block;
        max-width: 320px;
        font-size: 12px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 13px;
        max-width: 360px;
    }
`;

export const RounderNumber = styled.span`
    font-size: 7px;
    font-weight: bold;
    color: white;
    background-color: #CA7900;
    display: flex;
    justify-content: center;  
    align-items: center;
    width: 35px;
    height: 20px;
    border-radius: 16px;

    @media screen and (min-width: 768px) {
        font-size: 15px;
        width: 65px;
        height: 35px;
    }
`;


// SLIDER 2

