import React ,{Component} from 'react'
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import FormField from '../common/FormField'
import {productFecth} from '../../actions'

const formFields = [
    {label:"Product Name" ,name: "productName" ,type: "text" ,required: true},
    {label:"Unit Price" ,name: "productPrice" ,type: "number" ,required: true},
    {label:"Thumbnail" ,name: "thumbnail" ,type: "text" ,required: true}
]
class ProductForm extends Component {
    componentDidMount() {
        const {productID ,productFecth} = this.props
        productFecth(productID)
    }
    renderFields() {
        return formFields.map((field) => (<Field key={field.name} {...field} component={FormField}></Field>))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderFields()}
                    <button className="btn btn-block btn-info title">บันทึก</button>
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
    return {formValues: form.productForm ? form.productForm.values : null , initialValues: products }
}

export default connect(mapStateToProps ,{productFecth})(reduxForm({validate , form: 'productForm' ,enableReinitialize: true})(ProductForm))