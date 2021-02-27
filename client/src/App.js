import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header'
import Footer from './components/Footer'
import Monitor from './components/monitor/Monitor'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
  }
  }

  componentDidMount() {
    // fetch("http://localhost:3000/products" ,{method: "GET"}).then((res) => res.json()).then((res) => {
    //   this.setState({
    //     products: res
    //   })
    // })
    axios.get("http://localhost:3000/products").then((res) => {
      this.setState({
        products: res.data
      })
    })
    
  }

  render() {
    return (
      <div>
        <Header/>
        <Monitor {...this.state}/>
        <Footer company="AIS" email="thana446@cuben.postbox.in.th"/>
      </div>
    );
  }
}

export default App;
