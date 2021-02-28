import React, { Component } from "react";
import ProductItem from "./ProductItem"

class ProductList extends Component {
    showProducts() {
        return this.props.products && this.props.products.map((product) => (<ProductItem key={product._id} product={product} addOrder={this.props.addOrder} delProduct={this.props.delProduct} editProduct={this.props.editProduct}/>))
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