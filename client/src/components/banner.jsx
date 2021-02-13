import React from 'react';
// import styled from 'styled-components';

const NavbarContainer = window.styled.div`
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
const Navbar = window.styled.div`
padding: 0 4rem;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Links = window.styled.a`
font-weight: 600;
text-transform: none;
:visited {
  color: inherit;
}
`;
const BuyContainer = window.styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;
const BuyInfo = window.styled.div`
cursor: pointer;
font-size: 16px;
color: black;
margin: 0 1rem 0 0;
`;
const BuyButton = window.styled.div`
padding: .4rem 2rem;
cursor: pointer;
border-radius: 15px;
background-color: ${(props) => props.buy === 'false' ? '#fa4616' : 'black'};
color: white;
transition: transform .3s ease;
:hover {
  transform: scale(1.05);
}
`;

const LinkContainer = window.styled.div`
`;

class Banner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hash: '#/?OOS=false&colorIndex=0',
      scrollPosition: 0,
      scrollingDown: false
    }
    this.scrollHandle = this.scrollHandle.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandle)
    window.addEventListener('hashchange', () => {
      let buttonText = window.location.hash.split('&')[0].split('=')[1]
      this.setState({hash: window.location.hash, buttonText })
    });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandle);
    window.removeEventListener('hashchange', () => {
      let buttonText = window.location.hash.split('&')[0].split('=')[1]
      this.setState({hash: window.location.hash, buttonText })
    });
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
    let { hash, scrollingDown } = this.state;
    let buttonText = hash.split('&')[0].split('=')[1];
    return (
      <NavbarContainer id="banner" scrollingDown={scrollingDown}>
        <Navbar>
        <LinkContainer>
          <Links href=''>{this.props.titleData.categoryName}</Links>
          <Links href=''> > {this.props.titleData.title}</Links>
        </LinkContainer>
        <BuyContainer>
          <BuyInfo onClick={()=> this.scrollTo("reviews")}>{this.props.count} Reviews</BuyInfo>
          <BuyInfo onClick={() => document.getElementById('guide').click()}>Size{' & '}Fit</BuyInfo>
          <BuyInfo onClick={()=> this.scrollTo("impact")}>Impact</BuyInfo>
          <BuyButton
            onClick={buttonText === 'false' ? () => document.getElementById('buy').click() : () => this.scrollTo('inventory')}
            buy={buttonText}
          >
          {buttonText === 'false' ? 'Add to Bag' : 'Buy'}
          </BuyButton>
        </BuyContainer>
        </Navbar>
  </NavbarContainer >
          )
  }
};

export default Banner;
