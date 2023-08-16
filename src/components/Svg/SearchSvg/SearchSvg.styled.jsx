import styled from "styled-components";

export const SvgBox = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
`;

export const Svg = styled.svg`
    fill: rgba(255,255,255, 0.6);
    transition: transform 0.4s ease;
    &:hover,
    &:focus {
        transform: scale(1.2);
    }
`;
