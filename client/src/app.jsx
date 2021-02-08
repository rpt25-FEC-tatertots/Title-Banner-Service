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
      titleData: {title: '', categoryName: ''},
      reviewAvg: 0,
      reviewCount: 0,
    }
    this.getData();
  };

  getData() {
    let id = window.location.pathname
    Promise.all([
      axios.get(`/title${id}`),
      axios.get(`/reviews${id}`)
    ])
      .then(responses => {
        this.setState({titleData: responses[0].data, reviews: responses[1].data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <Banner
          count={this.state.reviewCount}
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