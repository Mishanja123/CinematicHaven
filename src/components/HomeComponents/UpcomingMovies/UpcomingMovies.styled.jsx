import styled from 'styled-components';


export const Container = styled.div`
max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

export const List = styled.ul`

`;

export const LiItem = styled.li`
    position: relative;
    overflow: hidden;

    min-width: 1250px;
    height: 510px;
    border-radius:25px;
    margin: 0;
    background: url(${props => props.$backgroundUrl}) no-repeat;
    background-size:cover;
    }
    a {
        text-decoration: none;
    margin-top: 0;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const InfoBtn = styled.button`
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 5px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 15px 19px;
    border: none;
    border-radius: 10px;
    background: rgba(250, 250, 250, 0.30);
    backdrop-filter: blur(20px);
    transition: opacity 0.9s ease, background 0.9s ease, color 0.9s ease; 

    svg {
        fill: rgb(255, 255, 255);
        transition: fill 0.9s ease;
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
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 3px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 15px 19px;
    border: none;
    border-radius: 10px;
    background: rgba(250, 250, 250, 0.30);
    backdrop-filter: blur(20px);
    transition: opacity 0.9s ease, background 0.9s ease, color 0.9s ease; 

    svg {
        fill: rgb(255, 255, 255);
        transition: fill 0.9s ease;
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
    border: none;
    opacity: 0.7;
    background-color:  rgba(255, 255, 255, 0);
    transition: opacity 0.9s ease;
    svg {
        fill: rgba(223, 221, 219, 0.7);
        transition: fill 0.9s ease, opacity 0.9s ease;
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
width: 46%;
height: 100%;
background-color: rgba(40, 40, 40, 0.40);
filter: blur(30px);
z-index: 1;
`;

export const MovieInfo = styled.span`
    position: relative;
    z-index: 3;
    height: 510px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

`;

export const InfoWrap = styled.span`
display:flex;
flex-direction: column;
gap: 10px;
padding: 0 0 30px 21px;
`;

export const DisplayTitle = styled.span`
max-width: 400px;
color: #FAFAFA;
font-size: 45px;
font-style: normal;
font-weight: 600;
line-height: normal;


    margin: 0;
`;


export const MovieOverview = styled.span`
    color: #BCBCBC;
    leading-trim: both;
    font-size: 16px;
    font-weight: 600;
    max-width: 520px;
`;

export const RounderNumber = styled.span`
            font-size: 34px;
            font-weight: bold;
            color: white;
            background-color: #CA7900;
            display: flex;
            justify-content: center;  
            align-items: center;
            width: 143px;
            height: 80px;
            border-radius: 16px;
`;


// SLIDER 2

