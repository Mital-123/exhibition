import React from 'react';
import Schedule from './Schedule';
import Footer from './Footer';

function HomeSec() {
  return (
    <>
      <div className=' darkcolorbg text-center'>
        <img src={require("../assets/Images/business_img.jpg")} alt="" className='img-fluid ' width={"50%"} />
      </div>



      <div className='darkcolorbg py-3'>
        <div className='position-relative '>
          <h1 className=' text-white text-center fw-bold py-2  borderbtm'><span className='orangecolor'>Businessotsav</span> Exhibition 2025 🔊</h1>
        </div>
      </div>



      {/* date & time start */}
      <div className="darkcolorbg py-3 pb-5">
        <div className="container bglightbluecolor my-2">
          <div className="row g-3 py-2 d-flex justify-content-center">
            <div className="col-12 col-lg-3">
              <div className="h-100 shadow">
                <div className='text-center'><img src="https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png" alt="" className='img-fluid w-25 ' />
                  <h3 className=' text-info text-center fw-bold py-2  borderbtm'>21 & 22 June</h3>
                  <div className='text-white '>Saturday & Sunday</div>
                  <div className='text-white '>10 am to 8 pm</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="h-100">
                <div className='text-center'><img src={require("../assets/Images/free entry 01.png")} alt="" className='img-fluid ' width={"50%"} />

                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="h-100 shadow">
                <div className='text-center'><img src={require("../assets/Images/location.png")} alt="" className='img-fluid w-25 ' />
                  <h3 className=' text-info text-center fw-bold py-2  borderbtm'>Venue</h3>
                  <div className='text-white px-5'>Iskon Mall,
                    Opp. Rajhans Theatre,
                    Piplod, Surat.</div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* date & time end */}
      <Schedule/>
      <Footer/>
    </>
  );
}

export default HomeSec;
