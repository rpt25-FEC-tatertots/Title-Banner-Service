import React from 'react';
import reactDOM from 'react-dom';
import Title from './components/title.jsx';
import Reviews from './components/reviews.jsx';
import axios from 'axios';
import Banner from './components/banner.jsx';
import { useLocation } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hash: window.location.hash,
      titleData: {title: '', categoryName: ''},
      reviewAvg: 4.7,
      reviewCount: 14,
    }
    let id = window.location.pathname
    axios.get(`/title${id}`)
      .then(response => this.setState({titleData: response.data}))
    axios.get(`/reviews${id}`)
      .then(response => {
        let reviewCount = response.data.reviews.length;
        let reviewAvg = response.data.reviews.reduce((acc, obj) => acc + obj.reviewRating, 0) / reviewCount;
        this.setState({reviewAvg, reviewCount})
      });
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({hash: window.location.hash})
    })
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange')
  }
  render() {
    return (
      <>
        <Banner
          count={this.state.reviewCount}
          buy={this.state.hash}
          titleData={this.state.titleData}
        />
          <Title title={this.state.titleData.title}/>
          <Reviews
            avg={this.state.reviewAvg}
            count={this.state.reviewCount}
          />
      </>
    )
  }
}
reactDOM.render(<App />, document.getElementById('title-banner'))