import React ,{Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import FormField from '../common/FormField'

class ProductForm extends Component {
    renderFields() {
        const formFields = [
            {label:"Product Name" ,name: "productName" ,type: "text" ,required: true},
            {label:"Unit Price" ,name: "unitPrice" ,type: "number" ,required: true},
            {label:"Thumbnail" ,name: "thumbnail" ,type: "text" ,required: true}
        ]
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

export default reduxForm({form: 'productForm'})(ProductForm)