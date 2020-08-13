import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <h2>This is simple Header & Footer page.</h2>
      <Home />
      <Footer />
    </div>
  }
}

export default App;
