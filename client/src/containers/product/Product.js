import React ,{Component} from 'react'
import axios from 'axios'
import ProductList from '../../components/product/ProductList'
import {withRouter} from 'react-router-dom'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.delProduct = this.delProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts() {
        axios.get("http://localhost:3000/products").then(res => {
            const products = res.data
            this.setState({products})
        })
    }

    delProduct(id) {
        axios.delete("http://localhost:3000/products/"+id).then(res => {
            this.getProducts()
        })
    }

    editProduct(id) {
        this.props.history.push('products/'+id)
    }

    addProduct() {
        this.props.history.push('products/add')
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1>ข้อมูลสินค้า</h1>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success btn-sm title float-right" onClick={() => this.addProduct()}>เพิ่ม</button>
                    </div>
                </div>
                <ProductList products={this.state.products} delProduct={this.delProduct} editProduct={this.editProduct}/>
            </div>
        )
    }
}

export default withRouter(Product)