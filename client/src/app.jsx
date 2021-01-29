import React from 'react';
import reactDOM from 'react-dom';
import Title from './components/title.jsx';
import Reviews from './components/reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }
  render() {
    return (
      <>
        <Title title={'Some Product Name Here'}/>
        <Reviews reviews={'Review Stars Here'}/>
        <div>{window.location.href}</div>
      </>
    )
  }
}
reactDOM.render(<App />, document.getElementById('app'))