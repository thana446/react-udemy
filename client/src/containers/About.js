import React from 'react'
const About = (props) =>{
    return (
        <div className="container row justify-content-center">
            <div className="col-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4">
                    เราเป็นร้านอาหาร ที่เน้นความอร่อยเท่านั้น
                    ไม่ให้ความสำคัญกับสุขภาพเท่าไร
                    เพราะสุขภาพที่ดีมาจากการออกกำลังกาย
                    ดังนั้นกินของอร่อยก่อนแล้วค่อยไปออกกำลังกาย
                </p>
                <h4 className="text-success">จาก เฮลตี้ คาเฟ่</h4>
            </div>
        </div>
    )
}
export default About;