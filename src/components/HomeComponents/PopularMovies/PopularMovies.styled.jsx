import styled from 'styled-components';
export const Container = styled.div`
    width: 310px;
    height:466.01px;
    background: rgba(255, 255, 255, 0.30);   
    border-radius: 38px;
    padding: 14px 20px 30px;
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
`;

export const MovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Heading = styled.h2`
    leading-trim: both;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02em;

    color: #fff;
    margin: 0;
    margin-bottom: 10px;
`;

export const List = styled.ul`
    border-radius: 16px;
    padding: 5px 5px;
    height: 430px; 
    overflow-y: auto;
    margin-right: 0;

`;

export const LiItem = styled.li`
    width: 308px;
    height: 173px;
    overflow-y: hidden;
    border-radius:16px;
    margin: 0;
    background: url(${props => props.$backgroundUrl}) no-repeat;
    background-size:cover;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.4);
    transition: box-shadow 0.4s ease;
    &:not(:last-child) {
        margin-bottom: 10px;
    }

    > a {
        border-radius:16px;
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        line-height: 2;
        margin-top: 0;
        
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
    opacity:0;
    transition: opacity 600ms ease;

    font-size:12px;
    line-height: 1.4;
    fill: rgba(70, 70, 70, 0.20);
    backdrop-filter: blur(10px);
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    padding: 15px 15px 15px;
    margin: 0;
`;

export const MovieInfo = styled.span`
    border-radius:16px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 173px;
    &:hover ${DisplayTitle} {
        // transform: translateX(0);
        opacity: 1;
    }
`;