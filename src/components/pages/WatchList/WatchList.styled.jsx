import styled from 'styled-components';


export const BackgroundLayer = styled.span`
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(40, 40, 40, 0.55);
filter: blur(35px);
z-index: 1;
`;

export const Box = styled.div`
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;

  }
  .pagination__page {
    color: rgba(255, 255, 255, 0.5)
  }
  .pagination__prev,
  .pagination__next,
  .pagination__page {
    svg {
        fill: rgba(255, 255, 255, 0.6);
        transition: fill 0.6;
    }
    &:hover {
        svg {
            fill: rgba(196,237,192, 1);
        }
    }
    margin: 0 10px;
    cursor: pointer;
  }
  
  .pagination__break,
  .pagination__disabled {
    margin: 0 10px;
  }
  
  .pagination__active {
    font-weight: bold;
    font-size:20px;
    color: rgba(196,237,192, 1);
  }
`;

export const List = styled.ul`
  margin-bottom: auto;
`;

export const Item = styled.li`
    position: relative;
    display: flex;
    min-width: 270px;
    max-width: 100%;
    margin-bottom: 15px;
    padding: 8px 8px 8px;
    border-radius: 23px;
    background: rgba(255, 255, 255, 0.30);   
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);

    @media screen and (min-width: 1200px) {
        max-width: 700px;
    }
`;

export const Img = styled.img`
    height: 130px;
    border-radius: 13px;
    margin-right: 10px;
    position: relative;
    z-index: 3;
    @media screen and (min-width: 768px) {
        margin-right: 20px;
        height: 160px;

    }
    @media screen and (min-width: 1200px) {

    }
`;

export const LayerBox = styled.span`
    position: relative;
`;

export const TextWrap = styled.span`
    position: relative;
    min-width:110px;
    max-width: 250px;

    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        max-width: 450px;
        // margin-right: 80px;

    
    }
`

export const Title = styled.p`
    font-size: 20px;

    @media screen and (min-width: 768px) {
    font-size: 25px;
    }
    @media screen and (min-width: 1200px) {

    }
`;

export const Overview = styled.p`
    max-width: 500px;
    height: 90px;
    overflow: auto;
    font-size: 10px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
    
    }
    @media screen and (min-width: 1200px) {
        font-size: 15px;
    
    }
`;

export const Button = styled.button`
    position: relative;
    z-index: 3;
    border: none;
    border-radius: 13px;
    background: rgba(255, 255, 255, 0.4);
    transition: background 0.4s;
        svg {
            fill: rgba(0,0,0, 0.4);
            transition: fill 0.4s;
        }
    &:hover {
        background: rgba(255, 255,255, 1);
        svg {
            fill: rgba(0,0,0, 1);
        }
    }
`;
