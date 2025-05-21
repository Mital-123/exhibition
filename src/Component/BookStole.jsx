import React from 'react'
import ButtonCom from './ButtonCom'
import { Link } from 'react-router-dom'

function BookStole() {
    return (
        <div>
            <div className="bg-white">
                <div className="container">
                    <div className="row g-3 py-2 py-lg-4 d-flex align-items-center justify-content-center">
                        <div className="col-12 col-lg-6 ">
                            <div className="h-100 darkcolorbg rounded-4 p-3 d-flex flex-column justify-content-between">
                                <div className='text-center rounded p-1 pt-4 ' style={{ backgroundColor: "var(--orange)" }}>
                                    <div className='fw-bold text-info display-6 text-uppercase'>
                                        Book Your Stall Now !
                                    </div>
                                    <div className='fw-bold text-white'>
                                        (For 2 Days)
                                    </div>
                                    <div className='fw-bold text-white display-6'>
                                        ₹ 3000/-
                                    </div>
                                </div>
                                <div className=' text-center'>
                                    <Link to={"/buynow"} className='text-decoration-none'>
                                        <ButtonCom btn='Book  Now' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookStole