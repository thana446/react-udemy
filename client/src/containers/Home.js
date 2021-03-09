import React, { Component } from 'react';

import Monitor from '../components/monitor/Monitor'
import axios from 'axios'
import {connect} from 'react-redux'
import {productFecth} from '../actions'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // fetch("http://localhost:3000/products" ,{method: "GET"}).then((res) => res.json()).then((res) => {
    //   this.setState({
    //     products: res
    //   })
    // })
    this.props.productFecth();
    
  }

  render() {
    return (
      <div>
        <Monitor {...this.props}/>
      </div>
    );
  }
}

function mapStateToProps({products}) {
  return {products};
}

export default connect(mapStateToProps ,{productFecth})(Home);
