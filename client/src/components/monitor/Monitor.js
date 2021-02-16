import React, { Component } from 'react'
import ProductList from '../product/ProductList'
import Calculator from './Calculator'

class Monitor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPrice: 0,
            orders: []
        }
        this.addOrder = this.addOrder.bind(this)
        this.delOrder = this.delOrder.bind(this)
    }
    addOrder = (product) => (test) => () => {
        console.log(test)
        let {orders ,totalPrice} = this.state
        let findOrder = orders.find((item) => item.product.productId === product.productId)
        if(findOrder) {
            findOrder.quantity++
        }else {
            orders.push({product ,quantity: 1})
        }
        totalPrice += (+product.productPrice)
        this.setState({
            orders,
            totalPrice
        })
    }
    delOrder(product) {
        let {orders ,totalPrice} = this.state
        let findOrder = orders.find((item) => item.product.productId === product.productId)
        orders = orders.filter((item) => item.product.productId !== product.productId)
        totalPrice -= +findOrder.product.productPrice*findOrder.quantity
        this.setState({
            orders,
            totalPrice
        })
        
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <ProductList products={this.props.products} addOrder={this.addOrder} />
                    </div>
                    <div className="col-3">
                        <Calculator {...this.state} delOrder={this.delOrder} />
                    </div>
                </div>
            </div>)
        
    }
}

export default Monitor