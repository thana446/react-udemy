import React from 'react'

export default ({input ,label ,type ,required}) => {
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input className="form-control" type={type} required={required} {...input}></input>
        </div>
    )
}