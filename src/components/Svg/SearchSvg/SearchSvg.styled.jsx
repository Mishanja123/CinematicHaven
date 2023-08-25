import styled from "styled-components";

export const SvgBox = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
`;

export const Svg = styled.svg`
    fill: rgba(255,255,255, 0.6);
    transition: transform 0.4s ease;
    width: 17px;
    height: 17px;
    @media screen and (min-width: 768px) {
        width: 20px;
        height: 20px;
    }

    @media screen and (min-width: 1200px) {

    }

    &:hover,
    &:focus {
        transform: scale(1.2);
    }
`;
