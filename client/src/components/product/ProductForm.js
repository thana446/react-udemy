import React ,{Component} from 'react'
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import FormField from '../common/FormField'

const formFields = [
    {label:"Product Name" ,name: "productName" ,type: "text" ,required: true},
    {label:"Unit Price" ,name: "unitPrice" ,type: "number" ,required: true},
    {label:"Thumbnail" ,name: "thumbnail" ,type: "text" ,required: true}
]
class ProductForm extends Component {
    renderFields() {
        return formFields.map((field) => (<Field key={field.name} {...field} component={FormField}></Field>))
    }
    render() {
        return (
            <div>
                <form>
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
    return {formValues: form.productForm ? form.productForm.values : null ,products }
}

export default connect(mapStateToProps)(reduxForm({validate , form: 'productForm'})(ProductForm))