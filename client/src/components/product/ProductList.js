import React, { Component } from "react";
import ProductItem from "./ProductItem"

class ProductList extends Component {
    showProducts() {
        const {products} = this.props
        return products && Array.isArray(products) && products.map((product) => (<ProductItem key={product._id} product={product} addOrder={this.props.addOrder} delProduct={this.props.delProduct} editProduct={this.props.editProduct}/>))
    }
    render() {
        return (
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}

export default ProductList