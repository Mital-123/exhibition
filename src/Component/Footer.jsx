import React from 'react'
import { IoMdPerson } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='footer_bg py-5 text-light text-center'>
                <div className='container'>
                    <div className='pb-4 pb-lg-5 d-flex justify-content-center'>
                        <div className="py-2 px-3 fs-4 rounded-4 fw-medium text-uppercase" style={{ width: "fit-content", background: "var(--info)" }}>
                            Join Us – Book Your Stall
                        </div>
                    </div>
                    <div className='row g-4 p-2 p-lg-0'>
                        <div className='col-12 col-lg-4'>
                            <div className='p-4 h-100 shadow custom-box' style={{ border: "4px double white" }}>
                                <div className='fw-bold fs-4 infocolor'>PG Click Office</div>
                                <div className='my-2'>
                                    <Link to={"tel:98259 99079"} className='text-light text-decoration-none'><div className='mb-2 footer_no'><LuPhoneCall className='text-warning footer_icon' /><span className='ms-2'>98259 99079</span></div></Link>
                                    <Link to={"tel:76989 00398"} className='text-light text-decoration-none'><div className='footer_no'><LuPhoneCall className='text-warning footer_icon' /><span className='ms-2'>76989 00398</span></div></Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-4'>
                            <div className='p-4 h-100 shadow custom-box' style={{ border: "4px double white" }}>
                                <div className='fw-bold fs-4 infocolor'>Founder of PG Click</div>
                                <div className='my-2'>
                                    <div className='mb-2 footer_no'><IoMdPerson className='text-warning footer_icon' /><span className='ms-2'>Lekha Gheewala</span></div>
                                    <Link to={"tel:94286 31038"} className='text-light text-decoration-none'><div className='footer_no'><LuPhoneCall className='text-warning footer_icon' /><span className='ms-2'>94286 31038</span></div></Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-4'>
                            <div className='p-4 h-100 shadow custom-box' style={{ border: "4px double white" }}>
                                <div className='fw-bold fs-4 infocolor'>Event Planner</div>
                                <div className='my-2'>
                                    <div className='mb-2 footer_no'><IoMdPerson className='text-warning footer_icon' /><span className='ms-2'>Kiran Sheth</span></div>
                                    <Link to={"tel:99794 60009"} className='text-light text-decoration-none'><div className='footer_no'><LuPhoneCall className='text-warning footer_icon' /><span className='ms-2'>99794 60009</span></div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer