import React from 'react'

const NotFound = (props) => {
    return (
        <div className="container col-8 text-center">
            <h1 className="mt-5" style={{fontSize:'5rem'}}>404</h1>
            <h2 className="mb-4">Not Found</h2>
            <p className="mb-5">ขออภัยไม่พบหน้าที่คุณค้นหา ดูเหมือนหน้าที่คุณพยายามเข้าถึงไม่มีอยู่</p>
        </div>
    )
}

export default NotFound