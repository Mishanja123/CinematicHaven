import styled from 'styled-components';

export const HomeBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
    align-items: center;
    justify-content: space-evenly;
    gap:20px;


    & > :nth-child(1) {
        order: 3; /* Змінюємо порядок першого дочірнього елемента на 2 */
    }

    & > :nth-child(2) {
        order: 1; /* Змінюємо порядок другого дочірнього елемента на 1 */
    }
    & > :nth-child(3) {
        order: 4; /* Змінюємо порядок першого дочірнього елемента на 2 */
    }

    & > :nth-child(4) {
        order: 2; /* Змінюємо порядок другого дочірнього елемента на 1 */
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;    
        align-items: center;
        row-gap: 35px;
        justify-content: space-evenly;

        & > :nth-child(1) {
            order: 3; /* Змінюємо порядок першого дочірнього елемента на 2 */
        }
    
        & > :nth-child(2) {
            order: 1; /* Змінюємо порядок другого дочірнього елемента на 1 */
        }
        & > :nth-child(3) {
            order: 4; /* Змінюємо порядок першого дочірнього елемента на 2 */
        }
    
        & > :nth-child(4) {
            order: 2; /* Змінюємо порядок другого дочірнього елемента на 1 */
        }
    }

    @media screen and (min-width: 1200px) {
        justify-content: space-between;

        & > :nth-child(1) {
            order: 1; /* Змінюємо порядок першого дочірнього елемента на 2 */
        }
    
        & > :nth-child(2) {
            order: 2; /* Змінюємо порядок другого дочірнього елемента на 1 */
        }
        & > :nth-child(3) {
            order: 3; /* Змінюємо порядок першого дочірнього елемента на 2 */
        }
    
        & > :nth-child(4) {
            order: 4; /* Змінюємо порядок другого дочірнього елемента на 1 */
        }
    }
`;

export const Container = styled.div`
    // display: flex;
    // justify-content: space-between;
    // &:first-child {
    //     margin-bottom: 20px;
    // }

    // @media screen and (min-width: 768px) {
    //     flex-direction: column-reverse;
    // }

    // @media screen and (min-width: 1200px) {
    //     flex-direction: row;

    // }
`;

    // @media screen and (min-width: 768px) {
    // }

    // @media screen and (min-width: 1200px) {

    // }