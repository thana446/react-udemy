import React ,{Component} from 'react'
import axios from 'axios'
import ProductList from '../../components/product/ProductList'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {productsFecth ,productDelete} from '../../actions'

class Product extends Component {
    constructor(props) {
        super(props)
        this.delProduct = this.delProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts() {
        this.props.productsFecth()
    }

    delProduct(id) {
        this.props.productDelete(id)
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
                <ProductList products={this.props.products} delProduct={this.delProduct} editProduct={this.editProduct}/>
            </div>
        )
    }
}

const mapStateToProps = ({products}) => {
    return {products}
}

export default withRouter(connect(mapStateToProps ,{productsFecth ,productDelete})(Product))