import React from 'react';

const ShopModalBase = window.styled.div`
position: absolute;
font-family: Nunito Sans;
top: 50px;
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
const ShopModal = ({ opacity }) => {
  return (
    <ShopModalBase opacity={opacity}>
      <Row>

      <Column>
        <h4>Women's</h4>
        <a>Shop All</a>
        <a>New Arrivals</a>
        <a>Jackets &amp; Vests</a>
        <a>Fleeces</a>
        <a>Sweatshirts &amp; Hoodies</a>
        <a>Sweaters</a>
        <a>Shirts</a>
        <a>T-Shirts</a>
        <a>Pants &amp; Jeans</a>
        <a>Snow &amp; Alpine Pants</a>
        <a>Shorts</a>
        <a>Overalls &amp; Jumpsuits</a>
        <a>Swimwear</a>
        <a>Wetsuits</a>
        <a>Waders &amp; Fishing Gear</a>
        <a>Base Layers</a>
        <a>Underwear &amp; Sports Bras</a>
        <a>Socks</a>
        <a>Hats &amp; Accessories</a>
        <a>Work Wear</a>
        <a>Used Gear</a>
      </Column>
      <Column>
        <h4>Men's</h4>
        <a>Shop All</a>
        <a>New Arrivals</a>
        <a>Jackets &amp; Vests</a>
        <a>Fleeces</a>
        <a>Sweatshirts &amp; Hoodies</a>
        <a>Sweaters</a>
        <a>Shirts</a>
        <a>T-Shirts</a>
        <a>Pants &amp; Jeans</a>
        <a>Snow &amp; Alpine Pants</a>
        <a>Shorts</a>
        <a>Boardshorts</a>
        <a>Wetsuits</a>
        <a>Waders &amp; Fishing Gear</a>
        <a>Base Layers</a>
        <a>Underwear</a>
        <a>Socks</a>
        <a>Hats &amp; Accessories</a>
        <a>Work Wear</a>
        <a>Used Gear</a>
      </Column>
      <Column>
        <h4>Packs &amp; Gear</h4>
        <a>Shop All</a>
        <a>Used Packs &amp; Gear</a>
        <a>Sleeping Bags</a>
        <a>Black Hole® Bags</a>
        <a>Backpacks</a>
        <a>Laptop Bags</a>
        <a>Totes, Slings, &amp; Waist Packs</a>
        <a>Duffel &amp; Travel Bags</a>
        <a>Technical Packs</a>
        <a>Water Protective Bags</a>
        <a>Water Bottles &amp; More</a>
        <a>Gear Care</a>
      </Column>
      <Column>
        <h4>Kids &amp; Baby</h4>
        <a>Shop All</a>
        <a>Babys &amp; Toddlers</a>
        <a>Boys'</a>
        <a>Girls'</a>
        <a>Used Gear</a>
        <br />
        <RedColumn>
          <h4>Sale</h4>
          <a>Men's</a>
          <a>Women's</a>
          <a>Kids' &amp; Baby</a>
          <a>Packs &amp; Gear</a>
        </RedColumn>
      </Column>
      <Column>
        <h4>Collections</h4>
        <a>Patagonia Bestsellers</a>
        <a>Work Wear</a>
        <a>Nano Puff® Insulation</a>
        <a>Fundamentals</a>
        <a>fleecelab</a>
        <a>Technical Insulation Guide</a>
        <a>R1® Air</a>
        <br/>
        <br/>
        <a>Patagonia Provisions</a>
        <a>Used Gear</a>
        <a>Books</a>
        <a>Gift Cards</a>
      </Column>
      </Row>
    </ShopModalBase>
  )
}
export default ShopModal;
