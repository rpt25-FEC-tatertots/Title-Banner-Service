import React from 'react';

const ShopModalBase = window.styled.div`
position: absolute;
background-color: black;
color: white;
width: 100%;
transition: opacity .5s ease;
opacity: ${(props) => props.opacity};
`;
const ShopModal = ({ opacity }) => {
  return (
    <ShopModalBase opacity={opacity}>Hello World</ShopModalBase>
  )
}
export default ShopModal;
