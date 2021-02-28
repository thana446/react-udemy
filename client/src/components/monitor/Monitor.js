import React, { Component } from 'react'
import ProductList from '../product/ProductList'
import Calculator from './Calculator'
import axios from 'axios'

class Monitor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPrice: 0,
            orders: [],
            confirm: false,
            msg: ''
        }
        this.addOrder = this.addOrder.bind(this)
        this.delOrder = this.delOrder.bind(this)
        this.confirmOrders = this.confirmOrders.bind(this)
        this.clearOrders = this.clearOrders.bind(this)
    }
    addOrder = (product) => (test) => () => {
        // console.log(test)
        let {orders ,totalPrice} = this.state
        let findOrder = orders.find((item) => item.product._id === product._id)
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
        let findOrder = orders.find((item) => item.product._id === product._id)
        orders = orders.filter((item) => item.product._id !== product._id)
        totalPrice -= +findOrder.product.productPrice*findOrder.quantity
        this.setState({
            orders,
            totalPrice
        })
        
    }
    confirmOrders = () => () => {
        var self = this
        const {orders ,totalPrice} = this.state
        if(totalPrice === 0) {
            this.setState({
                confirm: true,
                msg: 'ยังไม่เลือกรายการ'
            })
            return;
        }
        const request = {
            totalPrice,
            orders
        }
        axios.post("http://localhost:3000/orders" ,request).then(res => {
            console.log(res.data)
            this.setState({
                totalPrice: 0,
                orders: [],
                confirm: true,
                msg: 'บันทึกสำเร็จ'
            })
        })
        
    }
    clearOrders() {
        this.setState({
            totalPrice: 0,
            orders: [],
            confirm: true,
            msg: 'เคลียร์ข้อมูล'
        })
    }
    componentDidUpdate() {
        if(this.state.confirm) {
            setTimeout(() => {
                this.setState({
                    confirm: false
                })
            },3000)
        }
    }
    render() {
        return (
            <div className="container-fluid">
                {this.state.confirm && (<div className="alert alert-secondary text-right title">{this.state.msg}</div>)}
                <div className="row">
                    <div className="col-9">
                        <ProductList products={this.props.products} addOrder={this.addOrder} />
                    </div>
                    <div className="col-3">
                        <Calculator {...this.state} delOrder={this.delOrder} confirmOrders={this.confirmOrders} clearOrders={this.clearOrders}/>
                    </div>
                </div>
            </div>)
        
    }
}

export default Monitor