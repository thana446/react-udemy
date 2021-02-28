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
                <div style={{display:'flex',justifyContent:'space-between'}}>
                {
                    this.props.addOrder &&
                    <button className="btn btn-block btn-secondary title mt-3" onClick={this.props.addOrder(product)("test")}>สั่งซื้อ</button>
                }
                {
                    (this.props.delProduct || this.props.editProduct) &&
                    <button className="btn btn-info title mt-3 col-5" onClick={() => this.props.editProduct(product._id)}>แก้ไข</button>
                }
                {
                    (this.props.delProduct || this.props.editProduct) &&
                    <button className="btn btn-danger title mt-3 col-5" onClick={() => this.props.delProduct(product._id)}>ลบ</button>
                }
                </div>
            </div>
        )
    }
}

export default ProductItem;