import React ,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {orderFecth ,orderDelete} from '../../actions'

class Order extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.getOrders()
    }

    getOrders() {
        this.props.orderFecth()
    }

    delOrder(id) {
        this.props.orderDelete(id)
        console.log(id)
    }

    showOrders() {
        const { orders } = this.props
        return orders && orders.map(order => {
            let date = new Date(order.createdAt)
            return (<div key={order._id} className="col-3">
                <p className="text-right">
                    <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order._id)}>x</button>
                </p>
                <h5>วันที่ {date.toLocaleDateString()}</h5>
                <ul>
                    {order.orders && order.orders.map(record => (
                        <li key={record.product._id}>{record.product.productName} x {record.quantity}</li>
                    ))}
                </ul>
                <p className="mt-2">ยอดรวม {order.totalPrice} บาท</p>
            </div>)
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>รายการสั่งซื้อ</h1>
                <div className="row">
                    {this.showOrders()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({orders}) => {
    return {orders}
}
export default connect(mapStateToProps ,{orderFecth ,orderDelete})(Order)