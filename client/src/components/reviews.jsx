import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 6rem .5rem;
`;
const StyledA = styled.a`
margin: 10px;
font: 12px;
`
const Star = styled.h2`
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
