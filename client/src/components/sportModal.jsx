import React from 'react';

const SportModalBase = window.styled.div`
position: fixed;
top: 4em;
left: 0;
font-family: Nunito Sans;
background-color: black;
color: white;
width: 100vw;
transition: opacity .5s ease;
opacity: ${(props) => props.opacity};
display: flex;
justify-content: center;
`;
const Row = window.styled.div`
max-width: 33em;
padding: 2em;
display: flex;
flex-wrap: wrap;
`;
const Header = window.styled.div`
display: flex;
flex-direction: column;
padding: 0 .5em;
`;
const StyledLi = window.styled.div`
:hover {
  text-decoration: underline;
}
`
const SportModal = ({ opacity }) => {
  return (
    <SportModalBase opacity={opacity}>
      <Row>
        <Header>
          <h4>Snow</h4>
          <StyledLi>Community</StyledLi>
          <StyledLi>Shop Men's</StyledLi>
          <StyledLi>Shop Women's</StyledLi>
        </Header>
        <Header>
          <h4>Surfing</h4>
          <StyledLi>Community</StyledLi>
          <StyledLi>Shop Men's</StyledLi>
          <StyledLi>Shop Women's</StyledLi>
        </Header>
        <Header>
          <h4>Mountain Biking</h4>
          <StyledLi>Community</StyledLi>
          <StyledLi>Shop Men's</StyledLi>
          <StyledLi>Shop Women's</StyledLi>
        </Header>
        <Header>
          <h4>Trail Running</h4>
          <StyledLi>Community</StyledLi>
          <StyledLi>Shop Men's</StyledLi>
          <StyledLi>Shop Women's</StyledLi>
        </Header>
        <Header>
        <h4>Fly Fishing</h4>
          <StyledLi>Community</StyledLi>
          <StyledLi>Shop Men's</StyledLi>
          <StyledLi>Shop Women's</StyledLi>
        </Header>
        <Header>
        <h4>Kite Surfing</h4>
          <StyledLi>Community</StyledLi>
          <StyledLi>Shop Men's</StyledLi>
          <StyledLi>Shop Women's</StyledLi>
        </Header>
        <Header>
        <h4>Climbing</h4>
          <StyledLi>Community</StyledLi>
          <StyledLi>Shop Men's</StyledLi>
          <StyledLi>Shop Women's</StyledLi>
        </Header>
      </Row>
    </SportModalBase>
  )
}
export default SportModal;
