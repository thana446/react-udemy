import React, { Component } from "react";

class Calculator extends Component {
    showList() {
        const {orders ,delOrder} = this.props
        return orders && orders.length !== 0 ? 
        orders.map((item,i) => (<li key={'orders'+i} className="text-right text-success title">{item.product.productName} x {item.quantity} = {+(item.product.productPrice)*item.quantity}<button onClick={() => delOrder(item.product)} className="btn btn-light btn-sm">x</button></li>)) 
        : (<li>ไม่มีสินค้าค่าา</li>)
    }
    showHr() {
        return this.props.orders && (<hr/>)
    }
    render() {
        const {totalPrice ,confirmOrders ,clearOrders} = this.props
        return (
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr/>
                <ul className="list-unstyled">
                    {this.showList()}
                </ul>
                {this.showHr()}
                <button onClick={confirmOrders()} className="btn btn-block title btn-danger">ยืนยัน</button>
                <button onClick={() => clearOrders()} className="btn btn-block title btn-secondary">ยกเลิก</button>
            </div>)
    }
}

export default Calculator