import React from 'react';
import reactDOM from 'react-dom';
import Title from './components/title.jsx';
import Reviews from './components/reviews.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewAvg: 4.7,
      reviewCount: 14,
    }
    let id = window.location.pathname
    axios.get(`/title${id}`)
      .then(response => this.setState({title: response.data.title}))
    //uncomment when reviews is running on local
    axios.get(`/reviews${id}`)

      .then(response => {
        console.log(response.data)
        let reviewCount = response.data.reviews.length;
        let reviewAvg = response.data.reviews.reduce((acc, obj) => acc + obj.reviewRating, 0) / reviewCount;
        this.setState({reviewAvg, reviewCount})
      });
  };

  render() {
    return (
      <>
        <Title title={this.state.title}/>
        <Reviews
          avg={this.state.reviewAvg}
          count={this.state.reviewCount}
        />
      </>
    )
  }
}
reactDOM.render(<App />, document.getElementById('app'))