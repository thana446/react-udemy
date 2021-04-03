import React, { Component } from 'react';

import Monitor from '../components/monitor/Monitor'
import axios from 'axios'
import {connect} from 'react-redux'
import {productsFecth} from '../actions'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.productsFecth();
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

export default connect(mapStateToProps ,{productsFecth})(Home);
