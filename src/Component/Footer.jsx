import React from 'react'
import { IoMdPerson } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='footer_bg py-3 py-lg-4 text-light text-center'>
        <div className='container'>
          <div className='pb-4  mt-2 mt-lg-4 d-flex justify-content-center'>
            <div className="py-2 px-3 fs-4 rounded-4 fw-medium text-uppercase" style={{ width: "fit-content", background: "var(--info)" }} data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" >
              Stall Bookings Open – Contact Now!
            </div>
          </div>
          <div className='row justify-content-center g-4 p-2 p-lg-0'>
            <div className='col-12 col-lg-4' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true" data-aos-delay="50">
              <div className='p-4 h-100 shadow custom-box' style={{ border: "4px double white" }}>
                <div className='fw-bold fs-4 infocolor'>PG Click Office</div>
                <div className='my-2'>
                  <Link to={"tel:98259 99079"} className='text-light text-decoration-none'><div className='mb-2 footer_no'><LuPhoneCall className='text-warning footer_icon' />
                  <span className='ms-2'>+91 98259 99079</span></div></Link>
                  <Link to={"tel:76989 00398"} className='text-light text-decoration-none'><div className='footer_no'><LuPhoneCall className='text-warning footer_icon' />
                  <span className='ms-2'>+91 76989 00398</span></div></Link>
                </div>
              </div>
            </div>


            <div className='col-12 col-lg-4' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true" data-aos-delay="450">
              <div className='p-4 h-100 shadow custom-box' style={{ border: "4px double white" }}>
                <div className='fw-bold fs-4 infocolor'>Event Planner</div>
                <div className='my-2'>
                  <div className='mb-2 footer_no'><IoMdPerson className='text-warning footer_icon' /><span className='ms-2'>Kiran Sheth</span></div>
                  <Link to={"tel:99794 60009"} className='text-light text-decoration-none'><div className='footer_no'><LuPhoneCall className='text-warning footer_icon' />
                    <span className='ms-2'>+91 99794 60009</span></div></Link>
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