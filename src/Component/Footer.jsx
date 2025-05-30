import React from 'react'
import { IoMdPerson } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='footer_bg py-3 py-lg-4 text-light text-center'>
        <div className='container'>

          {/* <div className="row bglightbluecolor p-5 p-lg-4 rounded-4 d-flex justify-content-center rounded-pill  ">
          
            <div className="col-12 col-lg-5 mb-4 mb-lg-0  pt-3 pt-lg-0 " data-aos="fade-right" data-aos-duration="1500" data-aos-once="true" data-aos-delay="50">
              <div className="h-100">
                <div className="text-center mb-4">
                  <div className=" px-4 fs-4 rounded-4 fw-medium text-uppercase" style={{ display: "inline-block", background: "var(--info)" }}>
                    Our Supporters
                  </div>
                </div>
                <div className="row g-3 justify-content-center align-items-center">
                  {[
                    "qt=q_95.webp",
                    "SUPPORTER 01.jpg",
                    "SUPPORTER 02.jpg",
                    "SUPPORTER 03.jpg",
                  ].map((img, index) => (
                    <div key={index} className="col-6 col-md-3 d-flex justify-content-center" >
                      <div className="supporter-img-wrapper">
                        <img
                          src={require(`../assets/eximagies/${img}`)}
                          alt={`Supporter ${index + 1}`}
                          className="img-fluid supporter-img"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

  
            <div className="col-12 col-lg-4" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" data-aos-delay="50">
              <div className="h-100">
                <div className="text-center mb-4">
                  <div className=" px-4 fs-4 rounded-4 fw-medium text-uppercase" style={{ display: "inline-block", background: "var(--info)" }}>
                    Photography by
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="photography-img-wrapper">
                    <img
                      src={require("../assets/eximagies/photography.jpg")}
                      alt="Photography by"
                      className="img-fluid supporter-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}


          <div className='pb-4  mt-2 mt-lg-4 d-flex justify-content-center'>
            <div className="py-2 px-3 fs-4 rounded-4 fw-medium text-uppercase" style={{ width: "fit-content", background: "var(--info)" }} data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" >
              Stall Bookings Open – Contact Now!
            </div>
          </div>
          <div className='row g-4 p-2 p-lg-0'>
            <div className='col-12 col-lg-4' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true" data-aos-delay="50">
              <div className='p-4 h-100 shadow custom-box' style={{ border: "4px double white" }}>
                <div className='fw-bold fs-4 infocolor'>PG Click Office</div>
                <div className='my-2'>
                  <Link to={"tel:98259 99079"} className='text-light text-decoration-none'><div className='mb-2 footer_no'><LuPhoneCall className='text-warning footer_icon' /><span className='ms-2'>98259 99079</span></div></Link>
                  <Link to={"tel:76989 00398"} className='text-light text-decoration-none'><div className='footer_no'><LuPhoneCall className='text-warning footer_icon' /><span className='ms-2'>76989 00398</span></div></Link>
                </div>
              </div>
            </div>

            <div className='col-12 col-lg-4' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true" data-aos-delay="250">
              <div className='p-4 h-100 shadow custom-box' style={{ border: "4px double white" }}>
                <div className='fw-bold fs-4 infocolor'>Founder of PG Click</div>
                <div className='my-2'>
                  <div className='mb-2 footer_no'><IoMdPerson className='text-warning footer_icon' /><span className='ms-2'>Lekha Gheewala</span></div>
                  <Link to={"tel:94286 31038"} className='text-light text-decoration-none'><div className='footer_no'><LuPhoneCall className='text-warning footer_icon' /><span className='ms-2'>94286 31038</span></div></Link>
                </div>
              </div>
            </div>

            <div className='col-12 col-lg-4' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true" data-aos-delay="450">
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