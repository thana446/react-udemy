import React from "react"

const Footer = (props) => {
    const {company ,email} = props
    return (
        <div className="container-fluid">
            <div className="text-center">
                <small>
                    <span className="text-danger">Powered By {company}</span> | <span>Contact By Email : {email}</span>
                </small>
            </div>
        </div>
    )
}

export default Footer