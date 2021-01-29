import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
display: flex;
justify-content: center;
padding: 2rem 0;
`
const Title = (props) => (
  <TitleContainer>
    <h1>{props.title}</h1>
  </TitleContainer>
  )


export default Title