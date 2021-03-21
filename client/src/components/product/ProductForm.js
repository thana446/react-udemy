import React ,{Component} from 'react'
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import FormField from '../common/FormField'
import {productFecth ,productCreate ,productUpdate} from '../../actions'
import { withRouter } from 'react-router'

const formFields = [
    {label:"Product Name" ,name: "productName" ,type: "text" ,required: true},
    {label:"Product Price" ,name: "productPrice" ,type: "number" ,required: true},
    {label:"Thumbnail" ,name: "thumbnail" ,type: "text" ,required: true}
]
class ProductForm extends Component {
    componentDidMount() {
        const {productID ,productFecth} = this.props
        productID && productFecth(productID)
    }
    renderFields() {
        return formFields.map((field) => (<Field key={field.name} {...field} component={FormField}></Field>))
    }

    render() {
        const {products: {saved ,msg} ,productID ,formValues ,productUpdate ,productCreate} = this.props
        if(saved) this.props.history.push('/products')
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(() => (productID ? productUpdate(productID ,formValues) : productCreate(formValues)))}>
                    {this.renderFields()}
                    <button className="btn btn-block btn-info title" type="submit">บันทึก</button>
                </form>
            </div>
        )
    }
}

const validate = (values) => {
    const errors = {}
    formFields.forEach(({required ,name}) => {
        if(!values[name] && required) {
            errors[name] = "กรุณากรอกข้อมูลด้วยค่ะ"
        }
    })
    return errors
}

const mapStateToProps = ({form ,products}) => {
    products = Array.isArray(products) ? {} : products
    return {formValues: form.productForm ? form.productForm.values : null , initialValues: products ,products }
}

export default withRouter(connect(mapStateToProps ,{productFecth ,productCreate ,productUpdate})(reduxForm({validate , form: 'productForm' ,enableReinitialize: true})(ProductForm)))