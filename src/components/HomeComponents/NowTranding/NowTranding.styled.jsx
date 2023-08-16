import styled from 'styled-components';

export const Heading = styled.h2`
    color: #FAFAFA;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const List = styled.ul`
`;

export const LiItem = styled.li`
    max-width: 300px;
    // height: 400px;
    border-radius: 25px;
    background: url(${props => props.$backgroundUrl}) no-repeat;
    background-size:cover;
    
    a {
        text-decoration: none;
        margin-top: 0;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
    };
    
`;



export const RounderNumber = styled.span`
    font-size: 17px;
    font-weight: bold;
    color: white;
    background-color: #CA7900;
    display: flex;
    justify-content: center;  
    align-items: center;
    width: 68px;
    height: 36px;
    border-radius: 16px;
`;

export const DisplayTitle = styled.span`
    opacity:1;
    transition: opacity 600ms ease;
    font-weight: 700;
    font-size:18px;
    line-height: 1.4;
`;

export const Overview = styled.span`
    font-size: 12px;
    max-width: 220px;
    height: 110px;
    overflow-y: auto;
`;

export const MovieInfo = styled.span`
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    min-height: 180px;
    backdrop-filter: blur(20px);
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 15px 15px 15px;
    margin: 0;
    transition: opacity 0.7s ease;
`;
export const LinkWrap = styled.span`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    &:hover ${MovieInfo} {
        opacity: 1;
    }
`;

export const PlayWrap = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Play = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition:background-color 0.7s ease ;

    svg {
        fill: white;
        transition: fill 0.7s ease;
    }
    &:hover {
        background-color: #fff;

        svg {
            fill: black;
        }
    }
`;