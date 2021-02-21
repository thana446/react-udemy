import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header'
import Footer from './components/Footer'
import Monitor from './components/monitor/Monitor'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
      {productId: 1 ,productName: "สลัดผัก" ,productPrice: "120" ,thumbnail: "https://sites.google.com/site/sirapatsornfan/_/rsrc/1472679480927/kar-tha-slad-phak/2.jpg"},
      {productId: 2 ,productName: "ไก่ทอด" ,productPrice: "90" ,thumbnail: "https://img.wongnai.com/p/1920x0/2017/09/27/e3e5610ce8d9486aa9b1c33a83d7ab26.jpg"},
      {productId: 3 ,productName: "บิงซู" ,productPrice: "200" ,thumbnail: "https://cms.dmpcdn.com/travel/2016/09/15/a835c99e-ba9d-4c99-8230-608c645f82ce.jpg"},
      {productId: 4 ,productName: "เฟรนซฟราย" ,productPrice: "140" ,thumbnail: "https://waterlibrary.com/wp-content/uploads/2020/03/serving.jpg"}
    ]
  }
  }

  componentDidMount() {
    fetch("http://localhost:3000/products" ,{method: "GET"}).then((res) => res.json()).then((res) => {
      this.setState({
        products: res
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
