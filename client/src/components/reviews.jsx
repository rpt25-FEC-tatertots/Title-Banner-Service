import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
font-family: Nunito Sans;
display: flex;
justify-content: center;
align-items: center;
padding: 0 .5 1rem;
`;
const StyledA = styled.a`
font-family: Nunito Sans;
:visited {
  color: inherit;
}
margin: 10px;
font: 12px;
`
const Star = styled.div`
font-family: Nunito Sans;
  letter-spacing: 3px;
  background: linear-gradient(90deg,
    black ${(props) => props.percent}%,
    gray ${(props) => props.percent}%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`
const Reviews = (props) => {

  return (
    <ReviewsContainer>
      <Star percent={(props.avg / 5)*100} href=''>★★★★★</Star>
      <StyledA href=''>{props.count} Reviews</StyledA>
    </ReviewsContainer>
  )
}
export default Reviews;
