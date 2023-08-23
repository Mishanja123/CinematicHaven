import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`; 

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  row-gap: 30px;
  justify-content: center;
`;

export const Item = styled.li`
  > a {
      display:block;
      text-decoration: none;
      color: #fff;
    ;
`;

export const Img = styled.img`
  width: 270px;
  height: 405px;
  border-radius: 30px;
  margin-bottom: 10px;
`;

export const NameWrap = styled.span`
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MovieTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const MovieYear = styled.span`
  font-size: 14px;
  opacity: 0.4;
`;


// export const List = styled.ul`
// list-style: none;
// display: flex;
// flex-wrap: wrap;
// gap:15px;
// row-gap: 40px;
// justify-content: center;
// > li{
//   width: 270px;

//   >img{
//     border-radius: 1px;
//     width: 270px;
//     height: 405px;
//     margin-bottom: 20px;
//     box-shadow: 1px 3px 6px 0px rgba(0,0,0,0.7);
//     transition: box-shadow 0.3s ease;
//   }
//   > img:hover {
//     box-shadow: 1px 2px 10px 0px #FFA500;
// }
//   >p {
//     margin: 0;
//   }
//   }
// `;