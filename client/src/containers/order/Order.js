import React ,{Component} from 'react';
import axios from 'axios';

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: []
        }
    }
    componentDidMount() {
        this.getOrders()
    }

    getOrders() {
        axios.get("http://localhost:3000/orders").then(res => {
            const {dataList: orders} = res.data
            this.setState({
                orders
            })
        })
    }

    delOrder(id) {
        axios.delete("http://localhost:3000/orders/"+id).then(res => {
            this.getOrders()
        })
    }

    showOrders() {
        const { orders } = this.state
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

export default Order