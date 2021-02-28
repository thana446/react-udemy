import React, { Component } from 'react';

import Monitor from '../components/monitor/Monitor'
import axios from 'axios'

class Home extends Component {
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
        <Monitor {...this.state}/>
      </div>
    );
  }
}

export default Home;
