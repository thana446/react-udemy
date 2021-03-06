import React from 'react'

export default ({input ,label ,type ,meta: {error ,touched}}) => {
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input className="form-control" type={type} {...input}></input>
            {
                error && touched &&
                (<p className="mt-2 title text-danger">{error}</p>)
            }
        </div>
    )
}