import React from 'react';
import ShopModal from './shopModal.jsx';
import SportModal from './sportModal.jsx';
// import styled from 'styled-components';

const Tag = window.styled.div`
background-color: black;
position: absolute;
top: 1px;
width: 100%;
height: 10px;
border-radius: 10px;
opacity: ${(props) => props.opacity | 0};
transition: opacity .5s ease;
`;
const LinksContainer = window.styled.div`
position: relative;
display:flex;
justify-content: space-between;
align-items: center;
`
const Link = window.styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
padding: 0px 5px;
cursor: pointer;
align-text:center;
`
const Nav = window.styled.div`
background-color: white;
width: 100%;
color: black;
font-family: Nunito Sans;
display: flex;
justify-content: space-around;
align-items: center;
`;
const Nav2 = window.styled.div`
background-color: white;
width: 100%;
color: black;
font-family: Nunito Sans;
display: flex;
justify-content: space-between;
align-items: center;
`;
const BannerContainer = window.styled.div`
font-family: Nunito Sans;
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
const DropBanner = window.styled.div`
font-family: Nunito Sans;
padding: 0 4rem;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Links = window.styled.a`
font-family: Nunito Sans;
font-weight: 600;
text-decoration: none;
:visited {
  color: inherit;
}
`;
const BuyContainer = window.styled.div`
font-family: Nunito Sans;
display: flex;
justify-content: space-around;
align-items: center;
`;
const BuyInfo = window.styled.div`
font-family: Nunito Sans;
cursor: pointer;
font-size: 16px;
color: black;
margin: 0 1rem 0 0;
`;
const BuyButton = window.styled.div`
font-family: Nunito Sans;
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
const IconContainer = window.styled.div`
display: flex;
`;
const Icon = window.styled.img`
height: 25px;
width: 25px;
margin: 10px;
`;
const LinkContainer = window.styled.div`
`;

class Banner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hash: '#/?OOS=false&colorIndex=0',
      scrollPosition: 0,
      scrollingDown: false,
      showSport: 0,
      showShop: 0,
      showActivism: 0,
      showStories: 0,
      screenWidth: window.innerWidth,
    }
    this.scrollHandle = this.scrollHandle.bind(this);
    this.shopHandle = this.shopHandle.bind(this);
    this.sportHandle = this.sportHandle.bind(this);
    this.storiesHandle = this.storiesHandle.bind(this);
    this.activismHandle = this.activismHandle.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandle)
    window.addEventListener('hashchange', () => {
      let buttonText = window.location.hash.split('&')[0].split('=')[1]
      this.setState({hash: window.location.hash, buttonText })
    });
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandle);
    window.removeEventListener('hashchange', () => {
      let buttonText = window.location.hash.split('&')[0].split('=')[1]
      this.setState({hash: window.location.hash, buttonText })
    });
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize() {
    this.setState({screenWidth: window.innerWidth})
  }
  sportHandle() {
    let showSport = this.state.showSport === 1 ? 0 : 1;
    this.setState({ showSport });
  }
  shopHandle() {
    let showShop = this.state.showShop === 1 ? 0 : 1;
    this.setState({ showShop })
  }
  storiesHandle() {
    let showStories = this.state.showStories === 1 ? 0 : 1;
    this.setState({ showStories })
  }
  activismHandle() {
    let showActivism = this.state.showActivism === 1 ? 0 : 1;
    this.setState({ showActivism })
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
    let { hash, scrollingDown, showShop, showSport, showStories, showActivism, screenWidth } = this.state;
    let buttonText = hash.split('&')[0].split('=')[1];
    return (
      <>
        <BannerContainer id="banner" scrollingDown={scrollingDown}>
          <DropBanner>
            <LinkContainer>
              <Links href=''>{this.props.titleData.categoryName}</Links>
              <Links href=''> > {this.props.titleData.title}</Links>
            </LinkContainer>
            <BuyContainer>
              <BuyInfo onClick={() => this.scrollTo("reviews")}>{this.props.count} Reviews</BuyInfo>
              <BuyInfo onClick={() => document.getElementById('guide').click()}>Size{' & '}Fit</BuyInfo>
              <BuyInfo onClick={() => this.scrollTo("sourcing")}>Impact</BuyInfo>
              <BuyButton
                onClick={buttonText === 'false' ? () => document.getElementById('buy').click() : () => this.scrollTo('inventory')}
                buy={buttonText}
                >
                {buttonText === 'false' ? 'Add to Bag' : 'Buy'}
              </BuyButton>
            </BuyContainer>
          </DropBanner>
        </BannerContainer >
        {screenWidth > 991 ? (
        <Nav>
          <h2>Patagonia®</h2>
          <LinksContainer>
            <Link onMouseEnter={this.shopHandle}
              onMouseLeave={this.shopHandle}>
              <Tag opacity={showShop}></Tag>
              <h4>Shop</h4>
              {showShop ? <ShopModal opacity={showShop} /> : null}
            </Link>
            <Link onMouseEnter={this.activismHandle}
              onMouseLeave={this.activismHandle}>
              <Tag opacity={showActivism}></Tag>
              <h4>Activism</h4>
            </Link>
            <Link onMouseEnter={this.sportHandle}
              onMouseLeave={this.sportHandle}>
              <Tag opacity={showSport}></Tag>
              <h4>Sports</h4>
              {showSport ? <SportModal opacity={showSport} /> : null}
            </Link>
            <Link onMouseEnter={this.storiesHandle}
              onMouseLeave={this.storiesHandle}>
              <Tag opacity={showStories}></Tag>
              <h4>Stories</h4>
            </Link>
          </LinksContainer>
          <IconContainer>
            <Icon src="https://rpt25-fec-tatertots-images.s3-us-west-1.amazonaws.com/glass.svg" />
            <Icon src="https://rpt25-fec-tatertots-images.s3-us-west-1.amazonaws.com/bag.svg" />
            <Icon src="https://rpt25-fec-tatertots-images.s3-us-west-1.amazonaws.com/equals.svg" />
          </IconContainer>
        </Nav>) :
          (<Nav2>
            <Icon src="./bag.svg" />
            <h1>Patagonia®</h1>
            <IconContainer>
            <Icon src="./glass.svg" />
            <Icon src="./equals.svg" />
            </IconContainer>
          </Nav2>)}


      </>
    )
  }
};

export default Banner;
