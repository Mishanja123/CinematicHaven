import styled from "styled-components";


export const SectionBox = styled.section`


    border-radius: 20px;
    background: rgba(241, 246, 249, 0.40);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 10px 0 20px;
`;
export const Container = styled.div`

    min-width: 286px;
    max-width: 428px;
    padding: 0 12px;
    margin-left: auto;
    margin-right: auto;



    @media screen and (min-width: 768px) and (max-width: 1199px) {
        max-width: 768px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1188px;
        min-height: 866px;
        padding: 0 15px;
    }
`;

