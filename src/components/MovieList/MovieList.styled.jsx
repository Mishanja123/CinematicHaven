import styled from 'styled-components';

export const Container = styled.div`

`; 

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  row-gap: 40px;
  justify-content: center;
  
    > li {
      width: 270px;
      display: flex;
      flex-direction: column;
      gap: 5px;

        > a {
          width: 270px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-decoration: none;
          color: black;

          > img {
            border-radius: 1px;
            width: 270px;
            height: 405px;
            margin-bottom: 20px;
            box-shadow: 1px 3px 6px 0px rgba(0,0,0,0.7);
            transition: box-shadow 0.3s ease;
          };
          > img:hover {
            box-shadow: 1px 2px 10px 0px #FFA500;
          };
          > p {
            margin: 0;
          };
        }; 
  };
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