import React from 'react';

const ShopModalBase = window.styled.div`
position: fixed;
font-family: Nunito Sans;
top: 4em;
left: 0;
align-self: center;
width: 100vw;
background-color: black;
color: white;
transition: opacity .5s ease;
opacity: ${(props) => props.opacity};
display: flex;
justify-content: center;
`;
const Row = window.styled.div`
padding: 2em
display: flex;
flex-wrap: wrap;
`;
const Column = window.styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: column;
padding: 0 .5em;
`;
const RedColumn = window.styled.div`
display: flex;
color: red;
flex-wrap: nowrap;
flex-direction: column;
padding: 0 .5em;
`;
const StyledMenuItem = window.styled.div`
:hover {
  text-decoration: underline;
}
`;
const StyledH4 = window.styled.h4`
:hover {
  text-decoration: underline;
}
`;
const ShopModal = ({ opacity }) => {
  return (
    <ShopModalBase opacity={opacity}>
      <Row>

      <Column>
        <StyledH4 >Women's</StyledH4>
        <StyledMenuItem>Shop All</StyledMenuItem>
        <StyledMenuItem>New Arrivals</StyledMenuItem>
        <StyledMenuItem>Jackets &amp; Vests</StyledMenuItem>
        <StyledMenuItem>Fleeces</StyledMenuItem>
        <StyledMenuItem>Sweatshirts &amp; Hoodies</StyledMenuItem>
        <StyledMenuItem>Sweaters</StyledMenuItem>
        <StyledMenuItem>Shirts</StyledMenuItem>
        <StyledMenuItem>T-Shirts</StyledMenuItem>
        <StyledMenuItem>Pants &amp; Jeans</StyledMenuItem>
        <StyledMenuItem>Snow &amp; Alpine Pants</StyledMenuItem>
        <StyledMenuItem>Shorts</StyledMenuItem>
        <StyledMenuItem>Overalls &amp; Jumpsuits</StyledMenuItem>
        <StyledMenuItem>Swimwear</StyledMenuItem>
        <StyledMenuItem>Wetsuits</StyledMenuItem>
        <StyledMenuItem>Waders &amp; Fishing Gear</StyledMenuItem>
        <StyledMenuItem>Base Layers</StyledMenuItem>
        <StyledMenuItem>Underwear &amp; Sports Bras</StyledMenuItem>
        <StyledMenuItem>Socks</StyledMenuItem>
        <StyledMenuItem>Hats &amp; Accessories</StyledMenuItem>
        <StyledMenuItem>Work Wear</StyledMenuItem>
        <StyledMenuItem>Used Gear</StyledMenuItem>
      </Column>
      <Column>
        <StyledH4>Men's</StyledH4>
        <StyledMenuItem>Shop All</StyledMenuItem>
        <StyledMenuItem>New Arrivals</StyledMenuItem>
        <StyledMenuItem>Jackets &amp; Vests</StyledMenuItem>
        <StyledMenuItem>Fleeces</StyledMenuItem>
        <StyledMenuItem>Sweatshirts &amp; Hoodies</StyledMenuItem>
        <StyledMenuItem>Sweaters</StyledMenuItem>
        <StyledMenuItem>Shirts</StyledMenuItem>
        <StyledMenuItem>T-Shirts</StyledMenuItem>
        <StyledMenuItem>Pants &amp; Jeans</StyledMenuItem>
        <StyledMenuItem>Snow &amp; Alpine Pants</StyledMenuItem>
        <StyledMenuItem>Shorts</StyledMenuItem>
        <StyledMenuItem>Boardshorts</StyledMenuItem>
        <StyledMenuItem>Wetsuits</StyledMenuItem>
        <StyledMenuItem>Waders &amp; Fishing Gear</StyledMenuItem>
        <StyledMenuItem>Base Layers</StyledMenuItem>
        <StyledMenuItem>Underwear</StyledMenuItem>
        <StyledMenuItem>Socks</StyledMenuItem>
        <StyledMenuItem>Hats &amp; Accessories</StyledMenuItem>
        <StyledMenuItem>Work Wear</StyledMenuItem>
        <StyledMenuItem>Used Gear</StyledMenuItem>
      </Column>
      <Column>
        <StyledH4>Packs &amp; Gear</StyledH4>
        <StyledMenuItem>Shop All</StyledMenuItem>
        <StyledMenuItem>Used Packs &amp; Gear</StyledMenuItem>
        <StyledMenuItem>Sleeping Bags</StyledMenuItem>
        <StyledMenuItem>Black Hole® Bags</StyledMenuItem>
        <StyledMenuItem>Backpacks</StyledMenuItem>
        <StyledMenuItem>Laptop Bags</StyledMenuItem>
        <StyledMenuItem>Totes, Slings, &amp; Waist Packs</StyledMenuItem>
        <StyledMenuItem>Duffel &amp; Travel Bags</StyledMenuItem>
        <StyledMenuItem>Technical Packs</StyledMenuItem>
        <StyledMenuItem>Water Protective Bags</StyledMenuItem>
        <StyledMenuItem>Water Bottles &amp; More</StyledMenuItem>
        <StyledMenuItem>Gear Care</StyledMenuItem>
      </Column>
      <Column>
        <StyledH4>Kids &amp; Baby</StyledH4>
        <StyledMenuItem>Shop All</StyledMenuItem>
        <StyledMenuItem>Babys &amp; Toddlers</StyledMenuItem>
        <StyledMenuItem>Boys'</StyledMenuItem>
        <StyledMenuItem>Girls'</StyledMenuItem>
        <StyledMenuItem>Used Gear</StyledMenuItem>
        <br />
        <RedColumn>
          <StyledH4>Sale</StyledH4>
          <StyledMenuItem>Men's</StyledMenuItem>
          <StyledMenuItem>Women's</StyledMenuItem>
          <StyledMenuItem>Kids' &amp; Baby</StyledMenuItem>
          <StyledMenuItem>Packs &amp; Gear</StyledMenuItem>
        </RedColumn>
      </Column>
      <Column>
        <StyledH4>Collections</StyledH4>
        <StyledMenuItem>Patagonia Bestsellers</StyledMenuItem>
        <StyledMenuItem>Work Wear</StyledMenuItem>
        <StyledMenuItem>Nano Puff® Insulation</StyledMenuItem>
        <StyledMenuItem>Fundamentals</StyledMenuItem>
        <StyledMenuItem>fleecelab</StyledMenuItem>
        <StyledMenuItem>Technical Insulation Guide</StyledMenuItem>
        <StyledMenuItem>R1® Air</StyledMenuItem>
        <br/>
        <br/>
        <StyledMenuItem>Patagonia Provisions</StyledMenuItem>
        <StyledMenuItem>Used Gear</StyledMenuItem>
        <StyledMenuItem>Books</StyledMenuItem>
        <StyledMenuItem>Gift Cards</StyledMenuItem>
      </Column>
      </Row>
    </ShopModalBase>
  )
}
export default ShopModal;
