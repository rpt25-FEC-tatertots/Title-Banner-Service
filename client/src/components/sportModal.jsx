import React from 'react';

const SportModalBase = window.styled.div`
position: absolute;
top: 50px;
font-family: Nunito Sans;
background-color: black;
color: white;
width: 100vw;
transition: opacity .5s ease;
opacity: ${(props) => props.opacity};
z-index: ${(props) => props.opacity === 1 ? 2 : -100}
`;
const Row = window.styled.div`
padding: 1em 20em;
display: flex;
flex-wrap: wrap;
`;
const Header = window.styled.div`
display: flex;
flex-direction: column;
padding: 0 5px;
`;
const SportModal = ({ opacity }) => {
  return (
    <SportModalBase opacity={opacity}>
      <Row>
        <Header>
          <h4>Snow</h4>
          <a>Community</a>
          <a>Shop Men's</a>
          <a>Shop Women's</a>
        </Header>

        <Header>
          <h4>Surfing</h4>
          <a>Community</a>
          <a>Shop Men's</a>
          <a>Shop Women's</a>
        </Header>
        <Header>
          <h4>Mountain Biking</h4>
          <a>Community</a>
          <a>Shop Men's</a>
          <a>Shop Women's</a>
        </Header>
        <Header>
          <h4>Trail Running</h4>
          <a>Community</a>
          <a>Shop Men's</a>
          <a>Shop Women's</a>
        </Header>
        <Header>
        <h4>Fly Fishing</h4>
          <a>Community</a>
          <a>Shop Men's</a>
          <a>Shop Women's</a>
        </Header>
        <Header>
        <h4>Kite Surfing</h4>
          <a>Community</a>
          <a>Shop Men's</a>
          <a>Shop Women's</a>
        </Header>
        <Header>
        <h4>Climbing</h4>
          <a>Community</a>
          <a>Shop Men's</a>
          <a>Shop Women's</a>
        </Header>
      </Row>
    </SportModalBase>
  )
}
export default SportModal;
