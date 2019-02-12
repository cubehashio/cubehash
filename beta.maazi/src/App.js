import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <About />
      <Footer />
      </React.Fragment>
    );
  }
}

export default App;
