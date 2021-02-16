import React, { Component } from "react"

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
                        {this.state.date.toLocaleTimeString()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header