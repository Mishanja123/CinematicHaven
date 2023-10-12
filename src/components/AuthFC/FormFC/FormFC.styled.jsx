import styled from 'styled-components';


export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 292px;
    
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        width: 400px;
    }

    @media screen and (min-width: 1200px) {
        width: 400px;

        // width: 1188px;
    }
`
export const Label = styled.label`
    display: flex;
    gap: 10px;
    font-size: 14px;
    margin-bottom: 25px;
    cursor: pointer;

`

export const CheckBox = styled.input`
width: 15px;
height: 15px;
border: 2px solid #000; 
background-color: #fff; 
`


export const Input = styled.input`
    font-size: 15px;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 15px;
`

export const Button = styled.button`
    max-width: 90px;
    padding: 12px 15px;
    border-radius: 10px;
    border: none;
    background: rgba(255, 255, 255, 0.4);

    &:hover {
        background: rgba(255, 255, 255, 0.7);
    }
`