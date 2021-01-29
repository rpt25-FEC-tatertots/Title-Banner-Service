import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
`;
const Reviews = (props) => (
  <ReviewsContainer>{props.reviews}</ReviewsContainer>
)

export default Reviews;
