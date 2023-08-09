import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px 70px 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1px;
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);

        > h2 {
            text-align: center;
            color: #fff;
            margin: 0;
            margin-bottom: 20px;
            font-weight: 500;
            font-size: 40px;
            line-height: 1;
            letter-spacing: -0.02em;
        };
`;

export const List = styled.ul`
    display: flex;
    gap: 30px;
    overflow-y: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;

    > li {
        position: relative;
        margin-bottom: 0;

        > a {
            text-transform: uppercase;
            text-decoration: none;
            word-wrap: break-word;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            line-height: 2;
            margin-top: 0;
            margin-bottom: 20px;
            padding-bottom: 5px;
            transition: border 1.5s cubic-bezier(0.69, 0.02, 0.37, 0.98);
           
            > img {
                border-radius: 1px;
                width: 180px;
                height: 270px;
                margin-bottom: 25px;
                box-shadow: 1px 3px 6px 0px rgba(0,0,0,0.7);
                transition: box-shadow 0.3s ease;
            };
            > img:hover {
                box-shadow: 1px 2px 10px 0px #FFA500;
            };

            > span {
                position: absolute;
                top: 250px;
                right: 133px;
                font-size: 11px;
                font-weight: bold;
                color: white;
                background-color: black;
                display: flex;
                justify-content: center;  
                align-items: center;
                width: 34px;
                height: 34px;
                border-radius: 50%;
                border: 3px solid #FFA500;
            };
        };
    };
`;