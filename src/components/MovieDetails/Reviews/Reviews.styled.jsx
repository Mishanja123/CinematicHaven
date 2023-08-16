import styled from "styled-components";

export const ReviewStyled = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 520px;
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    > .review-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        gap:15px;

        > .avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;

            > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        > .author-details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            > .author-name {
                font-weight: bold;
                margin: 0;
            }

            > .rating {
                font-size: 14px;
                color: #777;
                margin: 0;
            }

            > .created-at {
                font-size: 12px;
                color: #aaa;
                margin: 0;
            }
        }
    }

    > .review-content {
        font-size: 14px;
        line-height: 1.5;
        width: 500px;
        height: 200px;
        overflow: auto;
        >p{
            margin:0;
            text-align:start;
        }
    }

    > .avatar-placeholder {
        width: 60px;
        height: 60px;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        };
    };
`;