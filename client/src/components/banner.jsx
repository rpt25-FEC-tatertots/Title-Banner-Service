import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
width: 100%;
min-height: 5rem;
display: flex;
align-items: center;
position: fixed;
background-color: white;
top: ${(props) => props.scrollingDown ? '0px' : '-60px'};
transition: top 1s;
z-index: 100;
@media (max-width: 991px) {
  opacity: 0;
  z-index: -1;
}
`;
const Navbar = styled.div`
padding: 0 4rem;
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
align-items: center;
`;
const BuyInfo = styled.div`
cursor: pointer;
font-size: 16px;
color: black;
margin: 0 1rem 0 0;
`;
const BuyButton = styled.div`
padding: .4rem 2rem;
cursor: pointer;
border-radius: 15px;
background-color: ${(props) => props.buy === 'Buy' ? 'black' : '#fa4616'};
color: white;
transition: transform .3s ease;
:hover {
  transform: scale(1.1);
}
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
    view.scrollIntoView({behavior: 'smooth'});
  }
  render() {
    const search = this.props.location;
    const name = new URLSearchParams(search).get("OOS");
    return (
      <NavbarContainer id="banner" scrollingDown={this.state.scrollingDown}>
        {console.log(search)}
        {/* {console.log(name)} */}
        <Navbar>
        <LinkContainer>
          <Links href=''>{this.props.titleData.categoryName}</Links>
          <Links href=''> > {this.props.titleData.title}</Links>
        </LinkContainer>
        <BuyContainer>
          <BuyInfo onClick={()=> this.scrollTo("reviews")}>{this.props.count} Reviews</BuyInfo>
          <BuyInfo onClick={() => document.getElementById('guide').click()}>Size{' & '}Fit</BuyInfo>
          <BuyInfo onClick={()=> this.scrollTo("impact")}>Impact</BuyInfo>
          <BuyButton onClick={() => document.getElementById('buy').click()} >{this.props.buy}</BuyButton>
        </BuyContainer>
        </Navbar>
  </NavbarContainer >
          )
  }
};

export default Banner;
