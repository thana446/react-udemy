import React ,{Component} from 'react'
import ProductForm from '../../components/product/ProductForm'

class ProductEdit extends Component {
    render() {
        const {match} = this.props
        return(
            <div className="container col-5">
                {
                    match.path.indexOf("add") > 0 &&
                    (
                        <div>
                            <h2 className="title">เพิ่มสินค้า</h2>
                            <ProductForm />
                        </div>
                    )

                }
                
                {
                    match.path.indexOf("edit") > 0 &&
                    (
                        <div>
                            <h2 className="title">เพิ่มแก้ไขสินค้า</h2>
                            <ProductForm />
                        </div>
                    )

                }

            </div>
        )
    }
}

export default ProductEdit
