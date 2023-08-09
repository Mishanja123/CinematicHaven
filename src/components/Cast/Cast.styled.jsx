import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    align-items: flex-end;
    gap: 15px;
    overflow: auto;
    margin-bottom: 40px;
    > li {
        display:flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 335px;

        > img {
        width:200px;
        box-shadow: 1px 3px 6px 0px rgba(0,0,0,0.7);
        };

        > p {
        margin-bottom: 0;
        };
    };
`;