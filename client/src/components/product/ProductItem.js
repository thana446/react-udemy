import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {product} = this.props;
        return (
            <div className="col-3">
                <img className="img-fluid img-thumbnail" style={{maxHeight: '174px'}} src={product.thumbnail} />
                <div className="align-items-center mt-2" style={{display: 'flex' ,justifyContent: 'space-between'}}>
                    <div><b>{product.productName}</b></div>
                    <div>{product.productPrice}</div>
                </div>
                <button className="btn btn-block btn-secondary title mt-3" onClick={this.props.addOrder(product)("test")}>สั่งซื้อ</button>
            </div>
        )
    }
}

export default ProductItem;