// import styled from 'styled-components';



// export const Form = styled.form`
//     color: #555;
//     display: flex;
//     padding: 10px 12px;
//     border-radius: 40px;
//     margin: 0;
//     background: rgba(32, 35, 39, 0.50);
//     box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
//     width: 160px;

//     @media screen and (min-width: 768px) {
//         margin-right: 0;
//         padding: 17px 19px;
//         width: 280px;
//     }
//     @media screen and (min-width: 1200px) {
//         width: 360px;
//     }
// `;

// export const Input = styled.input`

//     font-size: 12px;
//     font-weight: 500;
//     color: #fff;
//     width:100%;
//     border: none;
//     background: transparent;
//     margin: 0;
//     outline: none;

//     @media screen and (min-width: 768px) {
//         font-size: 17px;

//     }

//     @media screen and (min-width: 1200px) {

//     }
// `;

// export const SearchBtn = styled.button`
//     overflow: hidden;
//     width: 30px;
//     height:16px;
    
//     padding: 0;
//     margin: 0;
//     border: 1px solid transparent;
//     background: transparent;
//     svg {
//         width: 12px;
//         height: 12px;
//     }

//     @media screen and (min-width: 768px) {
//         width: 40px;
//         height:30px;

//         svg {
//             width: 25px;
//             height: 22px;
//         }
//     }

//     @media screen and (min-width: 1200px) {

//     }
// `;


import styled from 'styled-components';

export const Form = styled.form`

    width: 160px;

    @media screen and (min-width: 768px) {
        margin-right: 0;
        width: 280px;
    }

    @media screen and (min-width: 1200px) {
        width: 340px;
    }
`;

export const Input = styled.input`
    text-indent: 20px;
    display: inline-block;
    border: 0 none;
    width: 0;
    border-radius: 40px;
    transition: 0.3s;
    outline: none;
    cursor: pointer;
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    color: #555;
    font-size: 10px;
    padding: 17px 23px;

    background: rgba(0, 0, 0, 0.3) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNqslI0RgyAMhdENWIEVWMEVXIGO0BW6Ah2hHcGOoCPYEewINFzBe9IA9id37w4kfEZesHHOCSYUqSPJML+RJlELDwN1pMHxMZNMkr8RTgyz2YPH5LmtwXpIHkOFmKhIlxowDmYAycKnHAHYcTCsSpXOJCie6YWDnXKLGeHLN2stGaqDsXXrX3GFcYcLrfhjtKEhffQ792gYT2nT6pJDjCw4z7ZGdGipOIqNbXIwFUARmCbKpMfYxsWJBmCEDoW7+gYUTAU2s3HJrK3AJvMLkqGHFLgWXTckm+SfSQexs+tLRqwVfgvjgMsvMAT689S5M/sk/I14kO5PAQYAuk6L1q+EdHMAAAAASUVORK5CYII=) no-repeat 14px 13px;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);

    &:hover,
    &:focus {
        background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT5JREFUeNqsVLtOw0AQtIMlRJHCEhUVMg398QEUSZnSfILzCXxDPsFu6XAJHWnTcS1lWsprKdmLxtKwvjVBYaTV7cm+udnX5fPb+yyBSmwhVmK/FfPZLyjUPhI8YtXYi23EOovs7PzyevAbsWeoGg5HNUHsCipX8F9TZDOstVgLPxIsxW6w3sHv6dJ2StkLbh6IPtR/AWRfSIET20H9D2U1hfaAgxY2KMagcBSmg9/rmwx0lBqTzGfHoVfVHxXgXzCjHNRHnnHke4vMGc2q0RBR0GSeCLlpLaJGFWKUszVuib32nih7iTFrjXAPyGnQ48c3Gu5AOVlMtMk6NZuf+FiC+AIhV0T+pBQ5ntXceIJKqKko2duJ2TwoLAz5QTVnagJaXWEO8y/wSMuKH9RTJoCTHyNZFidOUEfNu/8WYAAOXUT04MOtlwAAAABJRU5ErkJggg==) no-repeat 14px 13px;
    }

    &:focus {
        padding: 17px 34px 17px 34px;
        width: 100%;
        cursor: text;
    }

    @media screen and (min-width: 768px) {
        max-width: 200px;
        font-size: 12px;
        padding: 17px 24px;

        background: rgba(0, 0, 0, 0.3) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNqslI0RgyAMhdENWIEVWMEVXIGO0BW6Ah2hHcGOoCPYEewINFzBe9IA9id37w4kfEZesHHOCSYUqSPJML+RJlELDwN1pMHxMZNMkr8RTgyz2YPH5LmtwXpIHkOFmKhIlxowDmYAycKnHAHYcTCsSpXOJCie6YWDnXKLGeHLN2stGaqDsXXrX3GFcYcLrfhjtKEhffQ792gYT2nT6pJDjCw4z7ZGdGipOIqNbXIwFUARmCbKpMfYxsWJBmCEDoW7+gYUTAU2s3HJrK3AJvMLkqGHFLgWXTckm+SfSQexs+tLRqwVfgvjgMsvMAT689S5M/sk/I14kO5PAQYAuk6L1q+EdHMAAAAASUVORK5CYII=) no-repeat 15px 14.5px;
        &:focus {
            padding: 17px 34px 17px 34px;
            width: 100%;
            cursor: text;
        }
        &:hover,
        &:focus {
            background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT5JREFUeNqsVLtOw0AQtIMlRJHCEhUVMg398QEUSZnSfILzCXxDPsFu6XAJHWnTcS1lWsprKdmLxtKwvjVBYaTV7cm+udnX5fPb+yyBSmwhVmK/FfPZLyjUPhI8YtXYi23EOovs7PzyevAbsWeoGg5HNUHsCipX8F9TZDOstVgLPxIsxW6w3sHv6dJ2StkLbh6IPtR/AWRfSIET20H9D2U1hfaAgxY2KMagcBSmg9/rmwx0lBqTzGfHoVfVHxXgXzCjHNRHnnHke4vMGc2q0RBR0GSeCLlpLaJGFWKUszVuib32nih7iTFrjXAPyGnQ48c3Gu5AOVlMtMk6NZuf+FiC+AIhV0T+pBQ5ntXceIJKqKko2duJ2TwoLAz5QTVnagJaXWEO8y/wSMuKH9RTJoCTHyNZFidOUEfNu/8WYAAOXUT04MOtlwAAAABJRU5ErkJggg==) no-repeat 15px 14.5px;
    
        }
    }

    @media screen and (min-width: 1200px) {
        max-width: 240px;
        font-size: 17px;
        padding: 19px 29px;
background: rgba(0, 0, 0, 0.3) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNqslI0RgyAMhdENWIEVWMEVXIGO0BW6Ah2hHcGOoCPYEewINFzBe9IA9id37w4kfEZesHHOCSYUqSPJML+RJlELDwN1pMHxMZNMkr8RTgyz2YPH5LmtwXpIHkOFmKhIlxowDmYAycKnHAHYcTCsSpXOJCie6YWDnXKLGeHLN2stGaqDsXXrX3GFcYcLrfhjtKEhffQ792gYT2nT6pJDjCw4z7ZGdGipOIqNbXIwFUARmCbKpMfYxsWJBmCEDoW7+gYUTAU2s3HJrK3AJvMLkqGHFLgWXTckm+SfSQexs+tLRqwVfgvjgMsvMAT689S5M/sk/I14kO5PAQYAuk6L1q+EdHMAAAAASUVORK5CYII=) no-repeat 20px 19px;
        &:focus {
            padding: 19px 30px 19px 44px;
            width: 100%;
            cursor: text;
        }
        &:hover,
        &:focus {
            background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT5JREFUeNqsVLtOw0AQtIMlRJHCEhUVMg398QEUSZnSfILzCXxDPsFu6XAJHWnTcS1lWsprKdmLxtKwvjVBYaTV7cm+udnX5fPb+yyBSmwhVmK/FfPZLyjUPhI8YtXYi23EOovs7PzyevAbsWeoGg5HNUHsCipX8F9TZDOstVgLPxIsxW6w3sHv6dJ2StkLbh6IPtR/AWRfSIET20H9D2U1hfaAgxY2KMagcBSmg9/rmwx0lBqTzGfHoVfVHxXgXzCjHNRHnnHke4vMGc2q0RBR0GSeCLlpLaJGFWKUszVuib32nih7iTFrjXAPyGnQ48c3Gu5AOVlMtMk6NZuf+FiC+AIhV0T+pBQ5ntXceIJKqKko2duJ2TwoLAz5QTVnagJaXWEO8y/wSMuKH9RTJoCTHyNZFidOUEfNu/8WYAAOXUT04MOtlwAAAABJRU5ErkJggg==) no-repeat 20px 19px;
    
        }
    }
`;

// export const SearchBtn = styled.button`
//     overflow: hidden;
//     width: 30px;
//     height: 16px;
//     padding: 0;
//     margin: 0;
//     border: 1px solid transparent;
//     background: transparent;
//     svg {
//         width: 12px;
//         height: 12px;
//     }

//     @media screen and (min-width: 768px) {
//         width: 40px;
//         height: 30px;
//         svg {
//             width: 25px;
//             height: 22px;
//         }
//     }
// `;