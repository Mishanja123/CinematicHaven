import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 60px;
`;


export const List = styled.ul`

    > li {
        position: relative;
        margin-bottom: 0;

        > img {
            border-radius: 1px;
            width: 360px;
            height: 563.4px;
            box-shadow: 1px 3px 6px 0px rgba(0,0,0,0.7);
            transition: box-shadow 0.3s ease;
        };
        > span {
            position: absolute;
            top: 520px;
            right: 10px;
            font-size: 15px;
            font-weight: bold;
            color: white;
            background-color: black;
            display: flex;
            justify-content: center;  
            align-items: center;
            width: 54px;
            height: 54px;
            border-radius: 50%;
            border: 3.5px solid #FFA500;
        };
    };
`;

export const ContainerTitle = styled.div`
    
    > ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;

        > li {
            text-align: start;

            > p {
               max-width: 580px;
               max-height: 100px;
               overflow: auto;
            };
        };
    };
`;

export const GenresList = styled.ul`
    display: flex;
    align-items: baseline;
    gap: 5px;

        >li {
       
        };
`;

export const InfoDiv = styled.div`
    text-align: start;
`;