import React, { Component } from "react"
import {Link} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {date : new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000)
    }

    tick() {
        this.setState({date : new Date()})
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{alignItems: "center"}}>
                    <div className="col-8">
                        <h1 className="text-success"><img src="/images/logo.png" width="50"></img>เฮลตี้ คาเฟ่</h1>
                    </div>
                    <div className="col-4 text-uppercase text-right">
                        <h5>
                            {this.state.date.toLocaleTimeString()}
                        </h5>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link className="text-success" to="/">หน้าหลัก</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link className="text-success" to="/orders">รายการสั่งซื้อ</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link className="text-success" to="/products">สินค้า</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link className="text-success" to="/about">เกี่ยวกับเรา</Link></li>
                        </ul>
                    </div>
                    
                </div>
                <hr/>
            </div>
        );
    }
}

export default Header