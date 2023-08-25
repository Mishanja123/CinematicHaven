import styled from 'styled-components';
export const Container = styled.div`
    max-width: 290px;
    height: 363px;
    padding: 10px 3px 2px;
    border-radius: 23px;
    background: rgba(255, 255, 255, 0.30);   
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);

`;

export const MovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Heading = styled.h2`
    margin: 0;
    margin-bottom: 10px;

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
    // border-radius: 16px;
    // padding: 5px 5px;
    // height: 360px; 
    // overflow-y: auto;
    // margin-right: 0;
    border-radius: 16px;
    padding: 0px 5px;

    height: 328px; 
    overflow-y: auto;
    margin-right: 0;
`;

export const LiItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 260px;
    height: 100px;
    overflow-y: hidden;
    border-radius:16px;
    margin: 0;
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

export const ImgBox = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Img = styled.img`
    width: 70px;
    height: 100px;
    border-radius:16px;
`;


export const DisplayTitle = styled.span`
    color: white;
    font-size: 13px;
    line-height: 1.3;
    font-weight: 700;
    max-width: 150px;
`;

export const Play = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(239, 239, 240, 0.4);
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 15px;
    transition: background-color 0.7s ease;

    svg {
        width: 20px;
        height: 20px;
        fill: white;
        transition: fill 0.7s ease;
    }
    &:hover {
        background-color: rgba(255, 255, 255, 1);
        svg {
            fill: black;
        }
    }

`;