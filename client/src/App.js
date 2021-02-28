import React, { Component } from 'react';
import {BrowserRouter ,Route ,Switch} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Order from './containers/order/Order';
import Product from './containers/product/Product';
import NotFound from './containers/error/NotFound';
class App extends Component {

  renderRouter() {
    return (<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/orders" component={Order} />
      <Route exact path="/products" component={Product} />
      <Route component={NotFound} />
    </Switch>)
  }

  render() {
    return (
        <BrowserRouter>
          <Header />
          {this.renderRouter()}
          <Footer company="AIS" email="thana446@cuben.postbox.in.th"/>
        </BrowserRouter>
    );
  }
}

export default App;
