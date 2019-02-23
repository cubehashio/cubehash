import React, {Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
            <Header />
            {this.props.children}
            <Slider />
            {this.props.children}
            <Body />
            {this.props.children}
            <Footer />
            </React.Fragment>
            
        );
    }
}

export default App;