import styled from 'styled-components';

export const Overlay = styled.div`
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  right: ${props => props.isopen ? '0' : '-300px'};
  width: 150px;
  height: 100%;
  padding: 50px 80px 50px 50px;
  background-color: rgba(0, 0, 0, 0.9);
  margin: 0;
  transition: right 0.5s ease;
`;