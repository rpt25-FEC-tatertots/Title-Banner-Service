import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
background-color: white;
top: ${(props) => props.scrollingDown ? '0px' : '-50px'};
transition: top .3s;
z-index: 100;
@media (max-width: 991px) {
  opacity: 0;
  z-index: -1;
}
`;
const Navbar = styled.div`
padding: 0 2rem;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Links = styled.a`
font-weight: 600;
text-transform: none;
:visited {
  color: inherit;
}
`;
const BuyContainer = styled.div`
display: flex;
justify-content: space-around;
`;
const BuyInfo = styled.div`
cursor: pointer;
font-size: 16px;
color: black;
margin: 0 1rem 0 0;
`;
const Button = styled.div`
cursor: pointer;
border-radius: 4px;
background-color: black;
color: white;
`;
const LinkContainer = styled.div`

`;

class Banner extends React.Component {
  constructor(props){
    super(props)
    this.state = {scrollPosition: 0}
    this.scrollHandle = this.scrollHandle.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandle)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandle);
  }
  scrollHandle() {
    if(window.pageYOffset > this.state.scrollPosition) {
      this.setState({scrollPosition: window.pageYOffset, scrollingDown: true})
    } else {
    this.setState({scrollPosition: window.pageYOffset, scrollingDown: false})
    }
  }
  scrollTo(elemName) {
    let view = document.getElementById(elemName)
    view.scrollIntoView();
  }
  render() {
    return (
      <NavbarContainer id="banner" scrollingDown={this.state.scrollingDown}>
        <Navbar>

        <LinkContainer>
          <Links href=''>{this.props.titleData.categoryName}</Links>
          <Links href=''> > {this.props.titleData.title}</Links>
        </LinkContainer>
        <BuyContainer>
          <BuyInfo onClick={()=> this.scrollTo("reviews")}>{this.props.count} Reviews</BuyInfo>
          <BuyInfo onClick={() => document.getElementById('guide').click()}>Style{' & '}Fit</BuyInfo>
          <BuyInfo onClick={()=> this.scrollTo("impact")}>Impact</BuyInfo>
          <Button onClick={() => document.getElemendById('buy').click()}>{this.props.buy}</Button>
        </BuyContainer>
        </Navbar>
  </NavbarContainer >
          )
  }
};

export default Banner;
