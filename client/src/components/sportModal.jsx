import React from 'react';

const SportModalBase = window.styled.div`
position: absolute;
font-family: Nunito Sans;
font-size: 700;
background-color: black;
color: white;
width: 100%;
transition: opacity .5s ease;
opacity: ${(props) => props.opacity};
`;
const SportModal = ({ opacity }) => {
  return (
    <SportModalBase opacity={opacity}>Sport Modal</SportModalBase>
  )
}
export default SportModal;
